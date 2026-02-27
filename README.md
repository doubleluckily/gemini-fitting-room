# AI 虚拟试穿应用 - 项目总览

## 项目简介

这是一个基于 Web 的 AI 虚拟试穿衣服应用，使用 Google Gemini API 实现智能试穿效果。

## 技术栈

- **前端**: Vue 3 + Vite
- **后端**: Go + Gemini API
- **样式**: 原生 CSS（浅色主题）

## 项目结构

```
doc/
├── main.go                          # Go 后端服务器
├── server                           # 编译后的可执行文件
└── web/                             # 前端项目
    ├── src/
    │   ├── App.vue                 # 主应用组件
    │   └── main.js                 # 入口文件
    ├── dist/                       # 构建输出目录
    ├── index.html                  # HTML 模板
    ├── package.json                # npm 依赖
    ├── vite.config.js              # Vite 配置
    ├── README.md                   # 原需求文档
    └── README.dev.md               # 开发指南
```

## 核心功能

### 1. 图片上传
- ✅ 人物照片上传
- ✅ 多张衣服图片上传（最多5张）
- ✅ 配饰图片上传（包包、鞋子等，最多3张）
- ✅ 图片预览和删除

### 2. 个性化参数
- ✅ 身高、体重设置
- ✅ 性别选择
- ✅ 季节选择
- ✅ 发型描述
- ✅ 背景场景设置

### 3. 试穿功能
- ✅ 文字描述输入
- ✅ 异步任务处理
- ✅ 实时状态查询（等待、处理中、完成、失败）
- ✅ 自动轮询任务状态

### 4. 结果展示
- ✅ 试穿结果展示
- ✅ 图片下载功能
- ✅ 历史记录查看
- ✅ 任务状态管理

### 5. 用户体验
- ✅ 响应式设计
- ✅ 浅色主题界面
- ✅ 加载状态提示
- ✅ 错误提示

## API 接口

### POST /api/tryon
创建试穿任务

### GET /api/tasks/{taskId}
获取任务状态

### GET /api/tasks
获取所有任务列表

## 快速开始

### 1. 安装依赖
```bash
cd web
npm install
```

### 2. 配置 API Key
```bash
export GEMINI_API_KEY="your-api-key"
```

### 3. 启动服务

**开发模式：**
```bash
# 终端1: 启动后端
go run main.go

# 终端2: 启动前端
cd web
npm run dev
```

**生产模式：**
```bash
# 构建前端
cd web
npm run build

# 启动后端（会自动服务前端静态文件）
cd ..
go run main.go
```

### 4. 访问应用
- 开发模式: http://localhost:3000
- 生产模式: http://localhost:8080

## 后端架构

### Go 服务器
- **端口**: 8080
- **CORS**: 已启用
- **静态文件服务**: `./web/dist`
- **任务存储**: 内存存储（可扩展为数据库）

### API 实现
- `handleTryOn`: 处理试穿请求，创建任务
- `processTryOnTask`: 异步处理任务，调用 Gemini API
- `handleGetTask`: 获取单个任务状态
- `handleListTasks`: 获取所有任务列表

### Gemini 集成
- 使用 `gemini-2.0-flash-exp` 模型
- 支持多图片输入
- 超时设置: 5分钟
- Base64 编码传输

## 前端架构

### Vue 3 组件
- **响应式数据**: 使用 Vue 3 Composition API
- **状态管理**: 本地组件状态
- **HTTP 请求**: Axios
- **轮询机制**: 自动查询任务状态

### 页面布局
- **左侧**: 输入区域（图片上传、参数设置）
- **右侧**: 结果展示区域（当前任务、历史记录）

### 样式设计
- **配色**: 浅色主题，紫色渐变主色调
- **响应式**: 支持移动端和桌面端
- **交互**: 悬停效果、过渡动画

## 数据流

1. 用户上传图片 → Base64 编码
2. 点击"开始试穿" → POST /api/tryon
3. 后端创建任务 → 返回 taskId
4. 前端开始轮询 → GET /api/tasks/{taskId}
5. 后端调用 Gemini API → 处理图片
6. 返回结果图片 → 前端展示
7. 保存到历史记录

## 未来优化

### 功能增强
- [ ] 数据库存储（PostgreSQL/MongoDB）
- [ ] 用户认证系统
- [ ] 更多模型选择
- [ ] 批量处理
- [ ] 图片编辑功能

### 性能优化
- [ ] Redis 缓存
- [ ] CDN 图片存储
- [ ] 任务队列
- [ ] WebSocket 实时推送

### UI/UX
- [ ] 深色主题
- [ ] 多语言支持
- [ ] 图片拖拽上传
- [ ] 进度条显示

## 技术文档

- **前端开发指南**: [web/README.dev.md](web/README.dev.md)
- **需求文档**: [web/README.md](web/README.md)

## 注意事项

1. **API Key**: 需要有效的 Google Gemini API Key
2. **网络**: 访问 Google API 可能需要配置代理
3. **存储**: 当前使用内存存储，重启会丢失数据
4. **性能**: 大图片处理可能需要较长时间

## 许可证

MIT License
