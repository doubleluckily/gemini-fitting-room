package main

import (
	"context"
	"database/sql"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"golang.org/x/net/proxy"
	"google.golang.org/genai"
	_ "github.com/mattn/go-sqlite3"
)

var (
	genaiClient *genai.Client
	db          *sql.DB
)

// SOCKS5 代理配置
const (
	SOCKS_ADDR = "127.0.0.1:8882"
)

// 数据库表结构
const (
	DB_PATH = "./generated/data.db"

	// 图片存储目录
	IMAGE_DIR = "./generated/images"
	INPUT_IMAGE_DIR = "./generated/input_images"
)

// 试穿任务请求
type TryOnRequest struct {
	Prompt        string   `json:"prompt"`        // 文字描述
	PersonImages  []string `json:"personImages"`  // 人物图片列表（base64）
	ItemImages    []string `json:"itemImages"`    // 物品图片列表（base64，衣服、包包、鞋子等）
	Height        string   `json:"height"`        // 身高（可选）
	Weight        string   `json:"weight"`        // 体重（可选）
	Bust          string   `json:"bust"`          // 胸围（可选）
	Waist         string   `json:"waist"`         // 腰围（可选）
	Hips          string   `json:"hips"`          // 臀围（可选）
	BodyFeatures  []string `json:"bodyFeatures"`  // 身材特征（可选）
	AspectRatio   string   `json:"aspectRatio"`   // 宽高比 (1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9)
}

// 任务状态
type TaskStatus struct {
	TaskID      string `json:"taskId"`
	Status      string `json:"status"`      // pending, processing, completed, failed
	ImagePath   string `json:"imagePath"`   // 生成的图片文件路径
	Error       string `json:"error"`       // 错误信息
	CreatedAt   int64  `json:"createdAt"`
	UpdatedAt   int64  `json:"updatedAt"`

	// 完整的输入参数（用于历史记录恢复）
	Prompt       string   `json:"prompt,omitempty"`
	PersonImages []string `json:"personImages,omitempty"` // 输入图片路径列表
	ItemImages   []string `json:"itemImages,omitempty"`   // 输入图片路径列表
	Height       string   `json:"height,omitempty"`
	Weight       string   `json:"weight,omitempty"`
	Bust         string   `json:"bust,omitempty"`
	Waist        string   `json:"waist,omitempty"`
	Hips         string   `json:"hips,omitempty"`
	BodyFeatures []string `json:"bodyFeatures,omitempty"`
	AspectRatio  string   `json:"aspectRatio,omitempty"`
}

// 任务存储（内存中，用于快速访问）
var tasks = make(map[string]*TaskStatus)

// 创建自定义的 HTTP 客户端，使用 SOCKS5 代理
func createHTTPClient() *http.Client {
	// 创建 SOCKS5 代理 dialer
	dialer, err := proxy.SOCKS5("tcp", SOCKS_ADDR, nil, proxy.Direct)
	if err != nil {
		log.Printf("警告: 无法创建 SOCKS5 代理，将使用直连: %v", err)
		return &http.Client{
			Timeout: 20 * time.Minute,
		}
	}

	// 创建自定义的 Transport，增加各种超时时间
	transport := &http.Transport{
		DialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {
			// 设置拨号超时为 30 秒
			conn, err := dialer.Dial(network, addr)
			if err != nil {
				log.Printf("代理拨号失败: %v", err)
				return nil, err
			}
			return conn, nil
		},
		// 增加各种超时时间
		TLSHandshakeTimeout:   30 * time.Second, // TLS 握手超时
		ResponseHeaderTimeout: 60 * time.Second, // 响应头超时（这里是关键）
		IdleConnTimeout:       90 * time.Second, // 空闲连接超时
		MaxIdleConns:          10,               // 最大空闲连接数
		DisableKeepAlives:     false,            // 启用 Keep-Alive
		ForceAttemptHTTP2:     true,             // 尝试 HTTP/2
	}

	return &http.Client{
		Transport: transport,
		Timeout:   20 * time.Minute, // 整体请求超时
	}
}

// 初始化数据库
func initDB() error {
	var err error

	db, err = sql.Open("sqlite3", DB_PATH)
	if err != nil {
		return fmt.Errorf("打开数据库失败: %v", err)
	}

	// 创建任务表
	createTableSQL := `
	CREATE TABLE IF NOT EXISTS tasks (
		task_id TEXT PRIMARY KEY,
		status TEXT NOT NULL,
		image_path TEXT,
		error TEXT,
		created_at INTEGER NOT NULL,
		updated_at INTEGER NOT NULL,

		-- 输入参数
		prompt TEXT,
		person_images TEXT,
		item_images TEXT,
		height TEXT,
		weight TEXT,
		bust TEXT,
		waist TEXT,
		hips TEXT,
		body_features TEXT,
		aspect_ratio TEXT
	);

	CREATE INDEX IF NOT EXISTS idx_created_at ON tasks(created_at DESC);
	CREATE INDEX IF NOT EXISTS idx_status ON tasks(status);
	`

	if _, err := db.Exec(createTableSQL); err != nil {
		return fmt.Errorf("创建表失败: %v", err)
	}

	// 启用 WAL 模式以支持并发读
	db.Exec("PRAGMA journal_mode=WAL")
	db.Exec("PRAGMA busy_timeout=5000")

	// 数据库迁移：将旧的 person_image 列改为 person_images
	// 检查是否存在旧列
	rows, _ := db.Query("PRAGMA table_info(tasks)")
	defer rows.Close()
	hasOldColumn := false
	for rows.Next() {
		var cid int
		var name, ctype string
		var notnull, pk int
		var dfltValue sql.NullString
		rows.Scan(&cid, &name, &ctype, &notnull, &dfltValue, &pk)
		if name == "person_image" {
			hasOldColumn = true
			break
		}
	}

	if hasOldColumn {
		log.Println("检测到旧版数据库结构，执行迁移...")
		// SQLite 不支持直接 DROP COLUMN，需要重建表
		migrationSQL := `
		BEGIN IMMEDIATE TRANSACTION;

		-- 创建新表
		CREATE TABLE tasks_new (
			task_id TEXT PRIMARY KEY,
			status TEXT NOT NULL,
			image_path TEXT,
			error TEXT,
			created_at INTEGER NOT NULL,
			updated_at INTEGER NOT NULL,
			prompt TEXT,
			person_images TEXT,
			item_images TEXT,
			height TEXT,
			weight TEXT,
			bust TEXT,
			waist TEXT,
			hips TEXT,
			body_features TEXT,
			aspect_ratio TEXT
		);

		-- 复制数据，将 person_image 转换为 JSON 数组
		INSERT INTO tasks_new
			SELECT task_id, status, image_path, error, created_at, updated_at,
			       prompt,
			       CASE
			           WHEN person_image IS NOT NULL AND person_image != ''
			           THEN '["' || person_image || '"]'
			           ELSE NULL
			       END,
			       item_images, height, weight, bust, waist, hips, body_features, aspect_ratio
			FROM tasks;

		-- 删除旧表
		DROP TABLE tasks;

		-- 重命名新表
		ALTER TABLE tasks_new RENAME TO tasks;

		-- 重建索引
		CREATE INDEX IF NOT EXISTS idx_created_at ON tasks(created_at DESC);
		CREATE INDEX IF NOT EXISTS idx_status ON tasks(status);

		COMMIT;
		`
		if _, err := db.Exec(migrationSQL); err != nil {
			log.Printf("警告: 数据库迁移失败: %v", err)
			log.Println("提示: 如果是 'database is locked' 错误，请关闭所有正在运行的程序实例后重试")
		} else {
			log.Println("✓ 数据库迁移成功")
		}
	}

	log.Println("✓ 数据库初始化成功")
	return nil
}

// 确保目录存在
func ensureDir(dir string) error {
	return os.MkdirAll(dir, 0755)
}

// 保存图片到本地（返回文件路径）
func saveImageFile(imageData []byte, filename string) (string, error) {
	if err := ensureDir(IMAGE_DIR); err != nil {
		return "", err
	}

	filepath := filepath.Join(IMAGE_DIR, filename)
	if err := os.WriteFile(filepath, imageData, 0644); err != nil {
		return "", err
	}

	log.Printf("图片已保存: %s", filepath)
	return filepath, nil
}

// 保存输入图片
func saveInputImage(imageData []byte, taskID string, imageType string) (string, error) {
	if err := ensureDir(INPUT_IMAGE_DIR); err != nil {
		return "", err
	}

	// 生成唯一文件名
	filename := fmt.Sprintf("%s_%d_%s.png", taskID, time.Now().UnixNano(), imageType)
	filepath := filepath.Join(INPUT_IMAGE_DIR, filename)

	if err := os.WriteFile(filepath, imageData, 0644); err != nil {
		return "", err
	}

	log.Printf("输入图片已保存: %s", filepath)
	return "/api/input_images/" + filename, nil
}

// 保存任务到数据库
func saveTaskToDB(task *TaskStatus) error {
	itemImagesJSON, _ := json.Marshal(task.ItemImages)
	personImagesJSON, _ := json.Marshal(task.PersonImages)
	bodyFeaturesJSON, _ := json.Marshal(task.BodyFeatures)

	_, err := db.Exec(`
		INSERT OR REPLACE INTO tasks (
			task_id, status, image_path, error, created_at, updated_at,
			prompt, person_images, item_images, height, weight, bust, waist, hips, body_features, aspect_ratio
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`,
		task.TaskID, task.Status, task.ImagePath, task.Error, task.CreatedAt, task.UpdatedAt,
		task.Prompt, string(personImagesJSON), string(itemImagesJSON), task.Height, task.Weight,
		task.Bust, task.Waist, task.Hips, string(bodyFeaturesJSON), task.AspectRatio,
	)

	return err
}

// 从数据库加载所有任务
func loadTasksFromDB() ([]*TaskStatus, error) {
	rows, err := db.Query(`
		SELECT task_id, status, image_path, error, created_at, updated_at,
		       prompt, person_images, item_images, height, weight, bust, waist, hips, body_features, aspect_ratio
		FROM tasks
		ORDER BY created_at DESC
	`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var tasks []*TaskStatus
	for rows.Next() {
		var task TaskStatus
		var personImagesJSON, itemImagesJSON, bodyFeaturesJSON sql.NullString

		err := rows.Scan(
			&task.TaskID, &task.Status, &task.ImagePath, &task.Error,
			&task.CreatedAt, &task.UpdatedAt,
			&task.Prompt, &personImagesJSON, &itemImagesJSON,
			&task.Height, &task.Weight, &task.Bust, &task.Waist, &task.Hips,
			&bodyFeaturesJSON, &task.AspectRatio,
		)
		if err != nil {
			return nil, err
		}

		// 解析 JSON 字段
		if personImagesJSON.Valid {
			json.Unmarshal([]byte(personImagesJSON.String), &task.PersonImages)
		}
		if itemImagesJSON.Valid {
			json.Unmarshal([]byte(itemImagesJSON.String), &task.ItemImages)
		}
		if bodyFeaturesJSON.Valid {
			json.Unmarshal([]byte(bodyFeaturesJSON.String), &task.BodyFeatures)
		}

		tasks = append(tasks, &task)
	}

	return tasks, nil
}

func init() {
	// 确保目录存在
	if err := ensureDir(IMAGE_DIR); err != nil {
		log.Printf("警告: 创建图片目录失败: %v", err)
	}
	if err := ensureDir(INPUT_IMAGE_DIR); err != nil {
		log.Printf("警告: 创建输入图片目录失败: %v", err)
	}

	// 初始化数据库
	if err := initDB(); err != nil {
		log.Fatalf("初始化数据库失败: %v", err)
	}

	// 从数据库加载任务到内存
	taskList, err := loadTasksFromDB()
	if err != nil {
		log.Printf("警告: 加载任务失败: %v", err)
	} else {
		for _, task := range taskList {
			tasks[task.TaskID] = task
		}
		log.Printf("✓ 已加载 %d 条历史任务", len(tasks))
	}

	// 初始化 Gemini 客户端
	ctx := context.Background()

	// 创建使用 SOCKS5 代理的 HTTP 客户端
	httpClient := createHTTPClient()
	log.Printf("✓ HTTP 客户端创建成功 (SOCKS5 代理: %s)", SOCKS_ADDR)
	log.Printf("  - 响应头超时: 60 秒")
	log.Printf("  - 整体超时: 20 分钟")

	// 使用自定义 HTTP 客户端创建 Gemini 客户端
	genaiClient, err = genai.NewClient(ctx, &genai.ClientConfig{
		HTTPClient: httpClient,
	})
	if err != nil {
		log.Fatalf("Failed to create Gemini client: %v", err)
	}

	log.Printf("✓ Gemini 客户端初始化成功")
	log.Printf("==============================================")
	log.Printf("代理配置:")
	log.Printf("  SOCKS5 地址: %s", SOCKS_ADDR)
	log.Printf("  超时时间: 20 分钟")
	log.Printf("==============================================")
}

func main() {
	// 图片文件服务（必须在静态文件服务之前）
	// 创建带 CORS 的图片文件服务，使用 /api/ 前缀以配合代理
	imagesHandler := http.StripPrefix("/api/images/", http.FileServer(http.Dir(IMAGE_DIR)))
	inputImagesHandler := http.StripPrefix("/api/input_images/", http.FileServer(http.Dir(INPUT_IMAGE_DIR)))

	http.Handle("/api/images/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Cache-Control", "no-cache")
		imagesHandler.ServeHTTP(w, r)
	}))

	http.Handle("/api/input_images/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Cache-Control", "no-cache")
		inputImagesHandler.ServeHTTP(w, r)
	}))

	// API 路由
	http.HandleFunc("/api/tryon", handleTryOn)
	http.HandleFunc("/api/tasks/", handleGetTask)
	http.HandleFunc("/api/tasks", handleListTasks)

	// 静态文件服务（放在最后，作为 fallback）
	fs := http.FileServer(http.Dir("./web/dist"))
	http.Handle("/", fs)

	port := 8080
	log.Printf("Server starting on port %d...", port)
	log.Printf("API endpoints:")
	log.Printf("  POST /api/tryon - 创建试穿任务")
	log.Printf("  GET  /api/tasks/{id} - 获取任务状态")
	log.Printf("  GET  /api/tasks - 获取所有任务列表")
	log.Printf("  GET  /images/{filename} - 访问生成的图片")
	log.Printf("  GET  /input_images/{filename} - 访问输入图片")

	if err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

// 处理试穿请求
func handleTryOn(w http.ResponseWriter, r *http.Request) {
	// 设置 CORS
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req TryOnRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, fmt.Sprintf("Invalid request: %v", err), http.StatusBadRequest)
		return
	}

	// 生成任务ID
	taskID := fmt.Sprintf("task_%d", time.Now().UnixNano())

	// 保存输入图片到文件
	var personImagePaths []string
	var itemImagePaths []string

	for i, personImg := range req.PersonImages {
		if personImg != "" {
			imgData, _ := base64.StdEncoding.DecodeString(personImg)
			path, _ := saveInputImage(imgData, taskID, fmt.Sprintf("person_%d", i))
			personImagePaths = append(personImagePaths, path)
		}
	}

	for i, itemImg := range req.ItemImages {
		if itemImg != "" {
			imgData, _ := base64.StdEncoding.DecodeString(itemImg)
			path, _ := saveInputImage(imgData, taskID, fmt.Sprintf("item_%d", i))
			itemImagePaths = append(itemImagePaths, path)
		}
	}

	// 创建任务
	task := &TaskStatus{
		TaskID:       taskID,
		Status:       "pending",
		CreatedAt:    time.Now().Unix(),
		UpdatedAt:    time.Now().Unix(),

		// 保存输入参数
		Prompt:       req.Prompt,
		PersonImages: personImagePaths,
		ItemImages:   itemImagePaths,
		Height:       req.Height,
		Weight:       req.Weight,
		Bust:         req.Bust,
		Waist:        req.Waist,
		Hips:         req.Hips,
		BodyFeatures: req.BodyFeatures,
		AspectRatio:  req.AspectRatio,
	}

	tasks[taskID] = task

	// 保存到数据库
	if err := saveTaskToDB(task); err != nil {
		log.Printf("[%s] 警告: 保存任务到数据库失败: %v", taskID, err)
	}

	// 异步处理任务
	go processTryOnTask(taskID, &req)

	// 返回任务ID
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"taskId": taskID,
		"status": "pending",
	})
}

// 处理试穿任务
func processTryOnTask(taskID string, req *TryOnRequest) {
	task := tasks[taskID]

	// 更新状态为处理中
	task.Status = "processing"
	task.UpdatedAt = time.Now().Unix()
	saveTaskToDB(task)

	log.Printf("[%s] 开始处理任务", taskID)

	// 计算图片数据量
	imageCount := len(req.PersonImages) + len(req.ItemImages)

	log.Printf("[%s] 图片数量: %d (人物:%d, 物品:%d)",
		taskID, imageCount,
		len(req.PersonImages),
		len(req.ItemImages))

	// 调用 Gemini API - 使用更长的超时时间
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Minute)
	defer cancel()

	// 构建 prompt，包含图片比例信息
	fullPrompt := buildPrompt(req)
	if req.AspectRatio != "" {
		fullPrompt += fmt.Sprintf("\n\n图片比例：%s", req.AspectRatio)
	}

	// 构建 Gemini parts
	parts := []*genai.Part{
		genai.NewPartFromText(fullPrompt),
	}

	// 添加人物图片
	for _, img := range req.PersonImages {
		if img != "" {
			imgData, err := base64.StdEncoding.DecodeString(img)
			if err == nil {
				parts = append(parts, &genai.Part{
					InlineData: &genai.Blob{
						MIMEType: "image/png",
						Data:     imgData,
					},
				})
			}
		}
	}

	// 添加物品图片
	for _, img := range req.ItemImages {
		if img != "" {
			imgData, err := base64.StdEncoding.DecodeString(img)
			if err == nil {
				parts = append(parts, &genai.Part{
					InlineData: &genai.Blob{
						MIMEType: "image/png",
						Data:     imgData,
					},
				})
			}
		}
	}

	contents := []*genai.Content{
		genai.NewContentFromParts(parts, genai.RoleUser),
	}

	log.Printf("[%s] 开始调用 Gemini API (模型: gemini-2.5-flash-image, 比例: %s)...",
		taskID, req.AspectRatio)
	result, err := genaiClient.Models.GenerateContent(
		ctx,
		"gemini-2.5-flash-image",
		contents,
		nil,
	)
	log.Printf("[%s] Gemini API 调用完成", taskID)

	if err != nil {
		task.Status = "failed"
		errorMsg := fmt.Sprintf("Gemini API 调用失败: %v", err)

		// 检查是否是超时错误
		if ctx.Err() == context.DeadlineExceeded {
			errorMsg = "请求超时：处理时间过长，请尝试减少图片数量或使用更小的图片"
		}

		task.Error = errorMsg
		task.UpdatedAt = time.Now().Unix()
		saveTaskToDB(task)
		log.Printf("[%s] 失败: %v", taskID, err)
		return
	}

	log.Printf("[%s] API 调用成功，正在处理结果...", taskID)

	// 处理结果
	if len(result.Candidates) == 0 {
		task.Status = "failed"
		task.Error = "No candidates in result"
		task.UpdatedAt = time.Now().Unix()
		saveTaskToDB(task)
		return
	}

	// 查找生成的图片
	for _, part := range result.Candidates[0].Content.Parts {
		if part.InlineData != nil {
			// 保存图片到本地文件
			filename := fmt.Sprintf("%s.png", taskID)
			_, err := saveImageFile(part.InlineData.Data, filename)
			if err != nil {
				log.Printf("[%s] 警告: 保存图片到本地失败: %v", taskID, err)
				task.Status = "failed"
				task.Error = fmt.Sprintf("保存图片失败: %v", err)
				task.UpdatedAt = time.Now().Unix()
				saveTaskToDB(task)
				return
			}

			task.ImagePath = "/api/images/" + filename
			task.Status = "completed"
			task.UpdatedAt = time.Now().Unix()

			// 保存到数据库
			if err := saveTaskToDB(task); err != nil {
				log.Printf("[%s] 警告: 保存任务到数据库失败: %v", taskID, err)
			}

			log.Printf("[%s] 任务完成成功", taskID)
			return
		}
	}

	// 如果没有图片返回
	task.Status = "failed"
	task.Error = "No image generated"
	task.UpdatedAt = time.Now().Unix()
	saveTaskToDB(task)
}

// 构建提示词
func buildPrompt(req *TryOnRequest) string {
	// 系统描述（固定部分）
	systemPrompt := "请根据提供的图片和描述，生成虚拟试穿效果图片。"

	// 身体参数描述（如果有）
	var params []string
	if req.Height != "" {
		params = append(params, fmt.Sprintf("身高：%s", req.Height))
	}
	if req.Weight != "" {
		params = append(params, fmt.Sprintf("体重：%s", req.Weight))
	}
	if req.Bust != "" {
		params = append(params, fmt.Sprintf("胸围：%s", req.Bust))
	}
	if req.Waist != "" {
		params = append(params, fmt.Sprintf("腰围：%s", req.Waist))
	}
	if req.Hips != "" {
		params = append(params, fmt.Sprintf("臀围：%s", req.Hips))
	}

	var paramsDesc string
	if len(params) > 0 {
		paramsDesc = "\n\n身体参数：" + strings.Join(params, "，")
	}

	// 身材特征描述（如果有）
	var featuresDesc string
	if len(req.BodyFeatures) > 0 {
		// 将英文特征值转换为中文描述
		featureMap := map[string]string{
			"slim":            "苗条",
			"standard":         "标准",
			"plump":            "丰满",
			"fit":              "健美",
			"athletic":         "结实",
			"curvy":            "圆润",
			"thin":             "瘦弱",
			"broad-shoulders":  "宽肩",
			"narrow-shoulders": "窄肩",
		}

		var chineseFeatures []string
		for _, feature := range req.BodyFeatures {
			if chinese, ok := featureMap[feature]; ok {
				chineseFeatures = append(chineseFeatures, chinese)
			}
		}

		if len(chineseFeatures) > 0 {
			featuresDesc = "\n\n身材特征：" + strings.Join(chineseFeatures, "、")
		}
	}

	// 用户自定义描述
	userPrompt := req.Prompt

	// 组合最终的 prompt
	var finalPrompt string
	if userPrompt != "" {
		// 有自定义描述：系统描述 + 参数 + 特征 + 自定义描述
		finalPrompt = systemPrompt + paramsDesc + featuresDesc + "\n\n" + userPrompt
	} else {
		// 无自定义描述：系统描述 + 参数 + 特征
		finalPrompt = systemPrompt + paramsDesc + featuresDesc
	}

	return finalPrompt
}

// 获取任务状态
func handleGetTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	// 从 URL 中提取任务ID
	taskID := r.URL.Path[len("/api/tasks/"):]

	task, exists := tasks[taskID]
	if !exists {
		http.Error(w, "Task not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(task)
}

// 获取所有任务列表
func handleListTasks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	// 转换为数组
	taskList := make([]*TaskStatus, 0, len(tasks))
	for _, task := range tasks {
		taskList = append(taskList, task)
	}

	json.NewEncoder(w).Encode(taskList)
}
