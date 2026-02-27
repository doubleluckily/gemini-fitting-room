<template>
  <div id="app">
    <header class="header">
      <h1>AI试衣间</h1>
    </header>

    <!-- 历史记录侧边栏 -->
    <div v-if="showHistoryModal" class="sidebar-overlay sidebar-overlay-right" @click="showHistoryModal = false">
      <div class="sidebar-content sidebar-content-right" @click.stop>
        <div class="sidebar-header">
          <h3>历史记录</h3>
          <button class="sidebar-close" @click="showHistoryModal = false">×</button>
        </div>
        <div class="sidebar-body">
          <div v-if="tasks.length === 0" class="empty-history">
            暂无记录
          </div>
          <div v-else class="task-list">
            <div
              v-for="task in tasks"
              :key="task.taskId"
              @click="selectTask(task); showHistoryModal = false"
              :class="['task-item', { active: currentTask?.taskId === task.taskId }]"
            >
              <div class="task-info">
                <span class="task-time">{{ formatTime(task.createdAt) }}</span>
                <span :class="['status-dot', task.status]"></span>
              </div>
              <div v-if="task.imagePath" class="task-thumb">
                <img :src="getImageUrl(task) + '?t=' + task.updatedAt" @error="console.log('缩略图加载失败:', task.imagePath, getImageUrl(task))" alt="结果" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片放大预览模态框 -->
    <div v-if="showImageModal" class="modal-overlay" @click="showImageModal = false">
      <div class="image-modal-content" @click.stop>
        <div class="image-modal-body">
          <img :src="modalImageUrl" alt="放大预览" />
        </div>
        <button class="image-modal-close" @click="showImageModal = false">×</button>
      </div>
    </div>

    <!-- 身体数据侧边栏 -->
    <div v-if="showBodyDataSidebar" class="sidebar-overlay" @click="showBodyDataSidebar = false">
      <div class="sidebar-content" @click.stop>
        <div class="sidebar-header">
          <h3>身体数据</h3>
          <button class="sidebar-close" @click="showBodyDataSidebar = false">×</button>
        </div>
        <div class="sidebar-body">
          <div class="form-row">
            <div class="form-group">
              <label>身高</label>
              <div class="input-with-unit">
                <input
                  v-model.number="formData.height"
                  type="number"
                  placeholder="170"
                  min="100"
                  max="250"
                />
                <span class="unit">cm</span>
              </div>
            </div>
            <div class="form-group">
              <label>体重</label>
              <div class="input-with-unit">
                <input
                  v-model.number="formData.weight"
                  type="number"
                  placeholder="60"
                  min="30"
                  max="200"
                />
                <span class="unit">kg</span>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>胸围</label>
              <div class="input-with-unit">
                <input
                  v-model.number="formData.bust"
                  type="number"
                  placeholder="90"
                  min="50"
                  max="150"
                />
                <span class="unit">cm</span>
              </div>
            </div>
            <div class="form-group">
              <label>腰围</label>
              <div class="input-with-unit">
                <input
                  v-model.number="formData.waist"
                  type="number"
                  placeholder="70"
                  min="40"
                  max="150"
                />
                <span class="unit">cm</span>
              </div>
            </div>
            <div class="form-group">
              <label>臀围</label>
              <div class="input-with-unit">
                <input
                  v-model.number="formData.hips"
                  type="number"
                  placeholder="95"
                  min="50"
                  max="160"
                />
                <span class="unit">cm</span>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>身材特征</label>
            <div class="checkbox-group-vertical">
              <label class="checkbox-item" v-for="feature in bodyFeatures" :key="feature.value">
                <input type="checkbox" :value="feature.value" v-model="formData.bodyFeatures" />
                <span>&nbsp;{{ feature.label }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 身体数据触发按钮 -->
    <button class="body-data-trigger" @click="showBodyDataSidebar = true" title="身体数据">
      身体参数
    </button>

    <!-- 历史记录触发按钮 -->
    <button class="history-trigger" @click="showHistoryModal = true" title="历史记录">
      历史记录
    </button>

    <main class="main-content">
      <!-- 单列布局 -->
      <div class="single-column">
        <div class="input-section upload-section-body">
            <!-- 试穿效果展示 -->
            <div class="result-section-main">
              <div class="result-display">
                <div v-if="currentTask" class="task-status">
                  <div v-if="currentTask.status === 'pending'" class="status-badge pending">
                    等待中
                  </div>
                  <div v-else-if="currentTask.status === 'processing'" class="status-badge processing">
                    处理中
                  </div>
                  <div v-else-if="currentTask.status === 'failed'" class="status-badge failed">
                    失败
                  </div>
                </div>

                <div v-if="currentTask?.imagePath || currentTask?.resultImage" class="result-image-wrapper">
                  <img :src="getImageUrl(currentTask) + '?t=' + (currentTask.updatedAt || Date.now())" alt="试穿结果" />
                  <div class="result-image-actions">
                    <button @click="openImageModal(getImageUrl(currentTask))" class="action-btn-small action-btn-zoom" title="放大查看">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </button>
                    <a
                      :href="getImageUrl(currentTask)"
                      download="tryon-result.png"
                      class="action-btn-small action-btn-download"
                      title="下载"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </a>
                    <button @click="clearResult" class="action-btn-small action-btn-clear" title="清除">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                <div v-else-if="currentTask?.error" class="error-message">
                  <p>{{ currentTask.error }}</p>
                </div>

                <div v-else class="placeholder">
                  <p>效果展示区</p>
                </div>
              </div>
            </div>

            <!-- 人物照片和物品图片并排 -->
            <div class="person-item-row">
              <!-- 人物照片 -->
              <div class="person-section">
                <label>人物照片</label>
                <div class="multiple-upload">
                  <div
                    v-for="(img, index) in formData.personImages"
                    :key="'person-' + index"
                    class="image-preview-small"
                  >
                    <img :src="img" alt="人物" />
                    <div class="small-image-actions">
                      <button @click="openImageModal(img)" class="action-btn-small action-btn-zoom" title="放大查看">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </button>
                      <button @click="removePersonImage(index)" class="action-btn-small action-btn-clear" title="删除">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    v-if="formData.personImages.length < 8"
                    class="upload-placeholder-small"
                    @click="triggerUpload('person')"
                  >
                    <span>+</span>
                  </div>
                  <input
                    ref="personInput"
                    type="file"
                    accept="image/*"
                    @change="handleImageUpload($event, 'person')"
                    hidden
                  />
                </div>
              </div>

              <!-- 物品图片 -->
              <div class="item-section">
                <label>物品图片</label>
                <div class="multiple-upload">
                  <div
                    v-for="(img, index) in formData.itemImages"
                    :key="'item-' + index"
                    class="image-preview-small"
                  >
                    <img :src="img" alt="物品" />
                    <div class="small-image-actions">
                      <button @click="openImageModal(img)" class="action-btn-small action-btn-zoom" title="放大查看">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      </button>
                      <button @click="removeItemImage(index)" class="action-btn-small action-btn-clear" title="删除">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    v-if="formData.itemImages.length < 8"
                    class="upload-placeholder-small"
                    @click="triggerUpload('item')"
                  >
                    <span>+</span>
                  </div>
                  <input
                    ref="itemInput"
                    type="file"
                    accept="image/*"
                    @change="handleImageUpload($event, 'item')"
                    hidden
                  />
                </div>
              </div>
            </div>

            <!-- 参数设置 -->
            <div class="settings-section-main">
              <!-- 图片比例和其他参数 -->
              <div class="settings-row-inline">
                <!-- 图片比例 -->
                <div class="form-group-compact">
                  <label>图片比例</label>
                  <select v-model="formData.aspectRatio">
                    <option value="9:16">9:16</option>
                    <option value="1:1">1:1</option>
                    <option value="16:9">16:9</option>
                    <option value="4:3">4:3</option>
                    <option value="3:4">3:4</option>
                  </select>
                </div>

                <!-- 其他参数预留位置 -->
                <div class="form-group-compact">
                  <!-- 后续可添加其他参数 -->
                </div>
              </div>

              <!-- 试穿描述 -->
              <div class="form-group">
                <label>试穿描述（可选）</label>
                <textarea
                  v-model="formData.prompt"
                  placeholder="描述你想要的试穿效果..."
                  rows="2"
                ></textarea>
              </div>
            </div>

        <!-- 按钮行 -->
        <div class="button-row">
          <button @click="submitTryOn" class="submit-btn" :disabled="loading">
            {{ loading ? '生成中...' : '开始试穿' }}
          </button>
          <button @click="clearAll" class="clear-btn">
            清空
          </button>
        </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import axios from 'axios'

const API_BASE = '/api'

export default {
  name: 'App',
  setup() {
    const formData = ref({
      prompt: '',
      personImages: [],
      itemImages: [],
      height: '',
      weight: '',
      bust: '',
      waist: '',
      hips: '',
      bodyFeatures: [],
      aspectRatio: '1:1'
    })

    // 身材特征选项
    const bodyFeatures = [
      { label: '苗条', value: 'slim' },
      { label: '标准', value: 'standard' },
      { label: '丰满', value: 'plump' },
      { label: '健美', value: 'fit' },
      { label: '结实', value: 'athletic' },
      { label: '圆润', value: 'curvy' },
      { label: '瘦弱', value: 'thin' },
      { label: '宽肩', value: 'broad-shoulders' },
      { label: '窄肩', value: 'narrow-shoulders' }
    ]

    const currentTask = ref(null)
    const tasks = ref([])
    const loading = ref(false)
    const personInput = ref(null)
    const itemInput = ref(null)
    const showHistoryModal = ref(false)
    const showImageModal = ref(false)
    const showBodyDataSidebar = ref(false)
    const modalImageUrl = ref('')

    // LocalStorage 键名
    const STORAGE_KEY = 'gemini-fitting-room-form-data'
    const RESULT_KEY = 'gemini-fitting-room-last-result'

    // 保存到 localStorage
    const saveToStorage = () => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData.value))
      } catch (error) {
        console.error('保存到 localStorage 失败:', error)
      }
    }

    // 保存结果到 localStorage（不保存图片数据，只保存文字参数）
    const saveResult = (task, formDataToSave = null) => {
      try {
        // 创建一个不包含图片的表单数据副本
        const formDataWithoutImages = formDataToSave ? {
          prompt: formDataToSave.prompt,
          height: formDataToSave.height,
          weight: formDataToSave.weight,
          bust: formDataToSave.bust,
          waist: formDataToSave.waist,
          hips: formDataToSave.hips,
          bodyFeatures: formDataToSave.bodyFeatures,
          aspectRatio: formDataToSave.aspectRatio
        } : {
          prompt: formData.value.prompt,
          height: formData.value.height,
          weight: formData.value.weight,
          bust: formData.value.bust,
          waist: formData.value.waist,
          hips: formData.value.hips,
          bodyFeatures: formData.value.bodyFeatures,
          aspectRatio: formData.value.aspectRatio
        }

        const dataToSave = {
          task: {
            ...task,
            // 不保存 base64 图片数据到 localStorage
            resultImage: task.imagePath ? null : task.resultImage,
            // 不保存人物和物品图片数组到 localStorage
            personImages: [],
            itemImages: []
          },
          formData: formDataWithoutImages
        }
        localStorage.setItem(RESULT_KEY, JSON.stringify(dataToSave))
      } catch (error) {
        console.error('保存结果失败:', error)
      }
    }

    // 从 localStorage 加载
    const loadFromStorage = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
          const parsed = JSON.parse(saved)

          // 兼容旧数据：如果存在 personImage (字符串)，转换为 personImages (数组)
          if (parsed.personImage && !parsed.personImages) {
            parsed.personImages = [parsed.personImage]
            delete parsed.personImage
          }

          formData.value = { ...formData.value, ...parsed }
        }
      } catch (error) {
        console.error('从 localStorage 加载失败:', error)
      }
    }

    // 从 localStorage 加载上次的结果
    const loadLastResult = () => {
      try {
        const saved = localStorage.getItem(RESULT_KEY)
        if (saved) {
          const parsed = JSON.parse(saved)
          // 恢复任务和表单数据
          if (parsed.task) {
            currentTask.value = parsed.task
          }
          if (parsed.formData) {
            formData.value = { ...formData.value, ...parsed.formData }
          }
        }
      } catch (error) {
        console.error('加载上次结果失败:', error)
        // 清除损坏的数据
        localStorage.removeItem(RESULT_KEY)
      }
    }

    // 清除结果
    const clearResult = () => {
      try {
        localStorage.removeItem(RESULT_KEY)
        currentTask.value = null
      } catch (error) {
        console.error('清除结果失败:', error)
      }
    }

    // 清空所有数据
    const clearAll = () => {
      try {
        // 重置表单数据为默认值
        formData.value = {
          prompt: '',
          personImages: [],
          itemImages: [],
          height: '',
          weight: '',
          bust: '',
          waist: '',
          hips: '',
          bodyFeatures: [],
          aspectRatio: '1:1'
        }

        // 清除当前任务结果
        currentTask.value = null

        // 清除 localStorage
        localStorage.removeItem(STORAGE_KEY)
        localStorage.removeItem(RESULT_KEY)

        // 重置文件输入
        if (personInput.value) {
          personInput.value.value = ''
        }
        if (itemInput.value) {
          itemInput.value.value = ''
        }
      } catch (error) {
        console.error('清空失败:', error)
      }
    }

    // 打开放大预览
    const openImageModal = (imageUrl) => {
      modalImageUrl.value = imageUrl
      showImageModal.value = true
    }

    let pollInterval = null

    // 上传图片
    const handleImageUpload = (event, type) => {
      const file = event.target.files[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = (e) => {
        const base64 = e.target.result.split(',')[1]

        if (type === 'person') {
          formData.value.personImages.push(`data:${file.type};base64,${base64}`)
        } else if (type === 'item') {
          formData.value.itemImages.push(`data:${file.type};base64,${base64}`)
        }
        saveToStorage()
      }
      reader.readAsDataURL(file)
    }

    // 触发文件选择
    const triggerUpload = (type) => {
      if (type === 'person') personInput.value?.click()
      else if (type === 'item') itemInput.value?.click()
    }

    // 移除图片
    const removePersonImage = (index) => {
      formData.value.personImages.splice(index, 1)
      saveToStorage()
    }

    const removeItemImage = (index) => {
      formData.value.itemImages.splice(index, 1)
      saveToStorage()
    }

    // 提交试穿请求
    const submitTryOn = async () => {
      if (formData.value.personImages.length === 0 && formData.value.itemImages.length === 0) {
        alert('请至少上传一张图片')
        return
      }

      loading.value = true

      try {
        // 移除 data:image/xxx;base64, 前缀
        const cleanBase64 = (dataUrl) => {
          if (!dataUrl) return ''
          return dataUrl.split(',')[1]
        }

        // 保存当前表单数据的快照
        const currentFormData = JSON.parse(JSON.stringify(formData.value))

        const requestData = {
          prompt: formData.value.prompt,
          personImages: formData.value.personImages.map(cleanBase64),
          itemImages: formData.value.itemImages.map(cleanBase64),
          height: formData.value.height ? `${formData.value.height}cm` : '',
          weight: formData.value.weight ? `${formData.value.weight}kg` : '',
          bust: formData.value.bust ? `${formData.value.bust}cm` : '',
          waist: formData.value.waist ? `${formData.value.waist}cm` : '',
          hips: formData.value.hips ? `${formData.value.hips}cm` : '',
          bodyFeatures: formData.value.bodyFeatures,
          aspectRatio: formData.value.aspectRatio
        }

        const response = await axios.post(`${API_BASE}/tryon`, requestData)
        const taskId = response.data.taskId

        // 设置当前任务，并附加表单数据
        currentTask.value = {
          taskId,
          status: 'pending',
          createdAt: Date.now() / 1000,
          updatedAt: Date.now() / 1000,
          formData: currentFormData
        }

        // 开始轮询
        startPolling(taskId, currentFormData)
      } catch (error) {
        console.error('提交失败:', error)
        alert('提交失败: ' + (error.response?.data?.error || error.message))
      } finally {
        loading.value = false
      }
    }

    // 轮询任务状态
    const startPolling = (taskId, formDataSnapshot) => {
      if (pollInterval) clearInterval(pollInterval)

      pollInterval = setInterval(async () => {
        try {
          const response = await axios.get(`${API_BASE}/tasks/${taskId}`)
          const task = response.data

          // 保留表单数据快照，但要确保不覆盖服务器返回的数据
          currentTask.value = {
            ...task,
            formData: formDataSnapshot
          }

          if (task.status === 'completed') {
            clearInterval(pollInterval)
            await loadTasks()
            saveResult(currentTask.value, formDataSnapshot)
          } else if (task.status === 'failed') {
            clearInterval(pollInterval)
            await loadTasks()
          }
        } catch (error) {
          console.error('获取任务状态失败:', error)
        }
      }, 2000)
    }

    // 加载任务列表
    const loadTasks = async () => {
      try {
        const response = await axios.get(`${API_BASE}/tasks`)
        tasks.value = response.data.sort((a, b) => b.createdAt - a.createdAt)
      } catch (error) {
        console.error('加载任务列表失败:', error)
      }
    }

    // 加载图片为 base64（用于历史记录恢复）
    const loadImageAsBase64 = async (imagePath) => {
      if (!imagePath) return ''

      // 如果已经是 data URL，直接返回
      if (imagePath.startsWith('data:')) {
        return imagePath
      }

      try {
        // 构造完整 URL，确保以 /api/ 开头，避免重复路径
        let url = imagePath

        // 如果已经是 /api/ 开头，直接使用
        if (url.startsWith('/api/')) {
          // 已经是正确的格式
        } else if (url.startsWith('./input_images/')) {
          url = '/api/input_images/' + url.replace('./input_images/', '')
        } else if (url.startsWith('./images/')) {
          url = '/api/images/' + url.replace('./images/', '')
        } else if (url.startsWith('/input_images/')) {
          url = '/api/input_images/' + url.replace('/input_images/', '')
        } else if (url.startsWith('/images/')) {
          url = '/api/images/' + url.replace('/images/', '')
        } else if (!url.startsWith('/')) {
          // 只有文件名，默认为输入图片
          url = '/api/input_images/' + url
        }

        const response = await fetch(url)
        const blob = await response.blob()
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })
      } catch (error) {
        console.error('加载图片失败:', imagePath, error)
        return ''
      }
    }

    // 选择任务
    const selectTask = async (task) => {
      currentTask.value = task

      // 从后端返回的完整输入参数恢复表单数据
      const restoredFormData = {
        prompt: task.prompt || '',
        height: task.height || '',
        weight: task.weight || '',
        bust: task.bust || '',
        waist: task.waist || '',
        hips: task.hips || '',
        bodyFeatures: task.bodyFeatures || [],
        aspectRatio: task.aspectRatio || '1:1',
        personImages: [],
        itemImages: []
      }

      // 加载人物图片
      // 兼容旧数据：支持 personImage (字符串) 和 personImages (数组)
      if (task.personImages && Array.isArray(task.personImages)) {
        for (const personPath of task.personImages) {
          const personImageData = await loadImageAsBase64(personPath)
          if (personImageData) {
            restoredFormData.personImages.push(personImageData)
          }
        }
      } else if (task.personImage) {
        // 旧数据格式：单张人物图片
        const personImageData = await loadImageAsBase64(task.personImage)
        if (personImageData) {
          restoredFormData.personImages.push(personImageData)
        }
      }

      // 加载物品图片
      if (task.itemImages && Array.isArray(task.itemImages)) {
        for (const itemPath of task.itemImages) {
          const itemImageData = await loadImageAsBase64(itemPath)
          if (itemImageData) {
            restoredFormData.itemImages.push(itemImageData)
          }
        }
      }

      // 恢复表单数据
      formData.value = restoredFormData
      saveToStorage()

      // 如果任务有结果图片，保存为当前显示的结果
      if (task.imagePath) {
        saveResult(currentTask.value, restoredFormData)
      }
    }

    // 格式化时间
    const formatTime = (timestamp) => {
      const date = new Date(timestamp * 1000)
      return date.toLocaleString('zh-CN')
    }

    // 获取图片 URL（优先使用本地文件路径）
    const getImageUrl = (task) => {
      if (!task) return ''

      // 优先使用服务器路径
      if (task.imagePath) {
        // 如果已经是 /api/ 开头，直接使用
        if (task.imagePath.startsWith('/api/')) {
          return task.imagePath
        }
        // 处理各种路径格式，统一转换为 /api/ 格式，避免重复
        if (task.imagePath.startsWith('./images/')) {
          return '/api/images/' + task.imagePath.replace('./images/', '')
        }
        if (task.imagePath.startsWith('./input_images/')) {
          return '/api/input_images/' + task.imagePath.replace('./input_images/', '')
        }
        if (task.imagePath.startsWith('/images/')) {
          return '/api/images/' + task.imagePath.replace('/images/', '')
        }
        if (task.imagePath.startsWith('/input_images/')) {
          return '/api/input_images/' + task.imagePath.replace('/input_images/', '')
        }
        // 如果只有文件名，默认为输出图片
        return `/api/images/${task.imagePath}`
      }

      // 降级到 base64
      if (task.resultImage) {
        // 检查是否已经是 data URL
        if (task.resultImage.startsWith('data:')) {
          return task.resultImage
        }
        return 'data:image/png;base64,' + task.resultImage
      }

      return ''
    }

    // 监听模态框状态，控制背景滚动
    watch(showHistoryModal, (newValue) => {
      if (newValue) {
        // 禁止背景滚动
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.width = '100%'
      } else {
        // 恢复背景滚动
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.width = ''
      }
    })

    // 监听 formData 变化，自动保存
    watch(formData, () => {
      saveToStorage()
    }, { deep: true })

    // 监听 ESC 键关闭图片模态框
    const handleKeydown = (e) => {
      if (e.key === 'Escape' && showImageModal.value) {
        showImageModal.value = false
      }
    }

    onMounted(() => {
      loadFromStorage()
      loadLastResult()
      loadTasks()
      // 添加键盘事件监听
      window.addEventListener('keydown', handleKeydown)
    })

    onUnmounted(() => {
      if (pollInterval) clearInterval(pollInterval)
      // 恢复背景滚动
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      // 移除键盘事件监听
      window.removeEventListener('keydown', handleKeydown)
    })

    return {
      formData,
      currentTask,
      tasks,
      loading,
      bodyFeatures,
      personInput,
      itemInput,
      showHistoryModal,
      showImageModal,
      showBodyDataSidebar,
      modalImageUrl,
      handleImageUpload,
      triggerUpload,
      removePersonImage,
      removeItemImage,
      submitTryOn,
      selectTask,
      formatTime,
      getImageUrl,
      clearResult,
      clearAll,
      openImageModal
    }
  }
}
</script>

<style>
/* 全局隐藏滚动条 */
html, body {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
}

/* Header */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  max-width: 100vw;
  height: 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header h1 {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin: 0;
}

/* 模态框样式 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

/* 身体数据侧边栏 */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.sidebar-content {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 320px;
  max-width: 85vw;
  height: 66.666vh;
  background: white;
  box-shadow: 4px 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  animation: slideInLeft 0.3s ease;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%) translateY(-50%);
  }
  to {
    transform: translateX(0) translateY(-50%);
  }
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem 0.625rem;
  border-bottom: 1px solid #e2e8f0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
}

.sidebar-close {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  line-height: 1;
}

.sidebar-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.sidebar-body {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
}

.checkbox-group-vertical {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.35rem;
}

.checkbox-group-vertical .checkbox-item {
  flex-direction: row;
  width: 100%;
}

/* 侧边栏内的表单样式优化 */
.sidebar-body .form-row {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 0.5rem;
}

.sidebar-body .form-group {
  margin-bottom: 0;
}

.sidebar-body .form-group label {
  font-size: 0.6875rem;
  margin-bottom: 0.25rem;
}

.sidebar-body .form-group input {
  padding: 0.35rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 4px;
}

.sidebar-body .input-with-unit input {
  padding-right: 2rem;
}

.sidebar-body .input-with-unit .unit {
  font-size: 0.625rem;
  padding: 0.1rem 0.25rem;
  right: 0.35rem;
}

.sidebar-body .checkbox-item {
  padding: 0.35rem 0.5rem;
  font-size: 0.6875rem;
  min-height: 28px;
}

.sidebar-body .checkbox-item input[type="checkbox"] {
  width: 14px;
  height: 14px;
}

@media (max-width: 768px) {
  .sidebar-body {
    padding: 0.625rem;
  }

  .sidebar-body .form-row {
    gap: 0.375rem;
    margin-bottom: 0.375rem;
  }

  .sidebar-body .form-group label {
    font-size: 0.625rem;
  }

  .sidebar-body .form-group input {
    padding: 0.3rem 0.4rem;
    font-size: 0.6875rem;
  }

  .sidebar-body .input-with-unit .unit {
    font-size: 0.5625rem;
    padding: 0.05rem 0.2rem;
    right: 0.3rem;
  }

  .sidebar-body .checkbox-item {
    padding: 0.3rem 0.4rem;
    font-size: 0.625rem;
    min-height: 26px;
  }

  .sidebar-body .checkbox-item input[type="checkbox"] {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 480px) {
  .sidebar-body {
    padding: 0.5rem;
  }

  .sidebar-body .form-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .sidebar-body .form-group label {
    font-size: 0.5625rem;
    margin-bottom: 0.2rem;
  }

  .sidebar-body .form-group input {
    padding: 0.25rem 0.35rem;
    font-size: 0.625rem;
  }

  .sidebar-body .input-with-unit input {
    padding-right: 1.75rem;
  }

  .sidebar-body .input-with-unit .unit {
    font-size: 0.5rem;
    padding: 0.05rem 0.15rem;
    right: 0.25rem;
  }

  .sidebar-body .checkbox-item {
    padding: 0.25rem 0.35rem;
    font-size: 0.5625rem;
    min-height: 24px;
  }

  .sidebar-body .checkbox-item input[type="checkbox"] {
    width: 11px;
    height: 11px;
  }
}

/* 身体数据触发按钮 */
.body-data-trigger {
  position: fixed;
  left: 0;
  top: 33.33%;
  transform: translateY(-50%);
  width: 32px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 0 8px 8px 0;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 0 8px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
  z-index: 99;
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
}

.body-data-trigger:hover {
  width: 40px;
  box-shadow: 2px 0 12px rgba(102, 126, 234, 0.6);
}

.body-data-trigger:active {
  width: 32px;
}

@media (max-width: 768px) {
  .body-data-trigger {
    width: 24px;
    height: 100px;
    font-size: 0.6875rem;
    letter-spacing: 1px;
  }

  .body-data-trigger:hover {
    width: 32px;
  }
}

@media (max-width: 480px) {
  .body-data-trigger {
    width: 20px;
    height: 90px;
    font-size: 0.625rem;
  }

  .body-data-trigger:hover {
    width: 28px;
  }
}

/* 历史记录侧边栏 */
.sidebar-overlay-right {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.sidebar-content-right {
  position: fixed;
  top: 50%;
  right: 0;
  left: auto;
  transform: translateY(-50%);
  width: 320px;
  max-width: 85vw;
  height: 66.666vh;
  background: white;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  animation: slideInRight 0.3s ease;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%) translateY(-50%);
  }
  to {
    transform: translateX(0) translateY(-50%);
  }
}

/* 历史记录触发按钮 */
.history-trigger {
  position: fixed;
  right: 0;
  top: 33.33%;
  transform: translateY(-50%);
  width: 32px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px 0 0 8px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -2px 0 8px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
  z-index: 99;
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
}

.history-trigger:hover {
  width: 40px;
  box-shadow: -2px 0 12px rgba(102, 126, 234, 0.6);
}

.history-trigger:active {
  width: 32px;
}

@media (max-width: 768px) {
  .history-trigger {
    width: 24px;
    height: 100px;
    font-size: 0.6875rem;
    letter-spacing: 1px;
  }

  .history-trigger:hover {
    width: 32px;
  }
}

@media (max-width: 480px) {
  .history-trigger {
    width: 20px;
    height: 90px;
    font-size: 0.625rem;
    letter-spacing: 1px;
  }

  .history-trigger:hover {
    width: 28px;
  }
}

/* 图片放大预览模态框 */
.image-modal-content {
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 1200px;
  max-height: 90vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.image-modal-body {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}

.image-modal-body img {
  max-width: 100%;
  max-height: calc(90vh - 60px);
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.image-modal-close {
  margin-top: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  color: #1e293b;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  line-height: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.image-modal-close:hover {
  background: rgba(239, 68, 68, 0.95);
  color: white;
  transform: scale(1.1);
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 0.75rem;
  margin-top: 3.5rem;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.main-content::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.single-column {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: visible;
}

/* Input Section */
.single-column > .input-section {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.75rem;
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow: visible;
}

/* Form Card */
.form-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  overflow: visible;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* 上传卡片宽度限制 */
.upload-card {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.input-section > .form-card {
  flex: 0 0 auto;
}

.form-card:last-of-type {
  margin-bottom: 0.5rem;
}

.form-card-body {
  padding: 0.75rem;
  border-top: 1px solid #e2e8f0;
  overflow: visible;
  max-width: 100%;
  box-sizing: border-box;
}

/* 图片上传区域特殊样式 - 始终展开 */
.upload-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: visible;
}

.upload-section-body {
  border-top: none;
  padding: 0.75rem;
  overflow: visible;
}

/* Form Elements */
.form-group {
  margin-bottom: 0.75rem;
  max-width: 100%;
  overflow: visible;
  box-sizing: border-box;
}

.form-group-last {
  margin-bottom: 0;
  padding-bottom: 0.5rem;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: #475569;
  font-size: 0.75rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 0.8125rem;
  transition: all 0.2s;
  background: white;
  color: #1e293b;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 50px;
}

/* Form Row */
.form-row {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 480px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-row:last-child {
  margin-bottom: 0;
}

/* Input with Unit */
.input-with-unit {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-unit input {
  padding-right: 2.25rem;
}

.input-with-unit .unit {
  position: absolute;
  right: 0.5rem;
  color: #64748b;
  font-size: 0.6875rem;
  font-weight: 600;
  pointer-events: none;
  background: #f1f5f9;
  padding: 0.15rem 0.35rem;
  border-radius: 3px;
}

/* Checkbox Group */
.checkbox-group {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
}

.checkbox-group::-webkit-scrollbar {
  height: 4px;
}

.checkbox-group::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 2px;
}

.checkbox-item {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.6rem;
  padding: 0.5rem 0.75rem;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  border: 1px solid #e2e8f0;
  font-size: 0.75rem;
  min-height: 32px;
  flex-shrink: 0;
}

.checkbox-item:hover {
  background: #f8fafc;
  border-color: #94a3b8;
}

.checkbox-item input[type="checkbox"] {
  cursor: pointer;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin: 0;
  vertical-align: middle;
  accent-color: #667eea;
}

.checkbox-item:has(input[type="checkbox"]:checked) {
  background: #eef2ff;
  border-color: #667eea;
}

.checkbox-item input[type="checkbox"]:checked + span {
  color: #667eea;
  font-weight: 600;
}

/* Image Upload */
.image-upload {
  margin-top: 0.35rem;
}

.upload-placeholder {
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: white;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}

.upload-placeholder:hover {
  border-color: #667eea;
  background: #f8fafc;
}

.upload-placeholder span {
  font-size: 1.5rem;
  color: #667eea;
  display: block;
  margin-bottom: 0.25rem;
  line-height: 1;
}

.upload-placeholder p {
  margin: 0;
  color: #64748b;
  font-weight: 500;
  font-size: 0.625rem;
}

.image-preview {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  min-height: 100px;
}

.image-preview img {
  max-width: 100%;
  width: 100%;
  border-radius: 8px;
  max-height: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

/* 小缩略图的操作按钮层 */
.small-image-actions {
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  gap: 4px;
  z-index: 10;
}

.action-btn-small {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding: 0;
  color: #475569;
}

.action-btn-small:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.action-btn-small svg {
  width: 12px;
  height: 12px;
}

.action-btn-small.action-btn-zoom:hover {
  background: rgba(102, 126, 234, 0.95);
  color: white;
}

.action-btn-small.action-btn-download {
  text-decoration: none;
}

.action-btn-small.action-btn-download:hover {
  background: rgba(16, 185, 129, 0.95);
  color: white;
}

.action-btn-small.action-btn-clear:hover {
  background: rgba(239, 68, 68, 0.95);
  color: white;
}

/* 试穿效果 - 主要展示区 */
.result-section-main {
  margin-bottom: 1rem;
}

.result-section-main > label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #475569;
  font-size: 0.875rem;
}

.result-section-main .result-display {
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

/* 人物照片和物品图片并排布局 */
.person-item-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: start;
}

.person-section {
  display: flex;
  flex-direction: column;
}

.person-section > label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #475569;
  font-size: 0.75rem;
}

.person-section .multiple-upload {
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  min-height: auto;
}

.item-section {
  display: flex;
  flex-direction: column;
}

.item-section > label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #475569;
  font-size: 0.75rem;
}

.item-section .multiple-upload {
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  min-height: auto;
}

/* 参数设置区域 */
.settings-section-main {
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.settings-section-main .settings-row-inline {
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e2e8f0;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  align-items: start;
}

/* 紧凑版表单组 - 用于参数设置 */
.form-group-compact {
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-group-compact label {
  font-weight: 600;
  color: #475569;
  font-size: 0.75rem;
  flex-shrink: 0;
  white-space: nowrap;
}

.form-group-compact select {
  flex: 1;
  min-width: 0;
  padding: 0.35rem 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 0.75rem;
  transition: all 0.2s;
  background: white;
  color: #1e293b;
}

.form-group-compact select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

@media (max-width: 768px) {
  .person-item-row {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .settings-row-inline {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .person-item-row {
    gap: 0.5rem;
  }

  .settings-row-inline {
    gap: 0.5rem;
  }
}

/* Multiple Upload */
.multiple-upload {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.image-preview-small {
  position: relative;
  width: 70px;
  height: 70px;
}

@media (min-width: 481px) {
  .image-preview-small {
    width: 80px;
    height: 80px;
  }
}

.image-preview-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.upload-placeholder-small {
  width: 70px;
  height: 70px;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: #667eea;
  transition: all 0.3s;
  background: white;
}

@media (min-width: 481px) {
  .upload-placeholder-small {
    width: 80px;
    height: 80px;
  }
}

.upload-placeholder-small:hover {
  border-color: #667eea;
  background: #f8fafc;
}

/* 按钮行 */
.button-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Submit Button */
.submit-btn {
  flex: 1;
  padding: 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Clear Button */
.clear-btn {
  flex: 0 0 auto;
  min-width: 80px;
  padding: 0.75rem 1.25rem;
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.clear-btn:hover {
  background: #fee2e2;
  color: #dc2626;
  border-color: #fca5a5;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.2);
}

.clear-btn:active {
  transform: translateY(0);
}

/* Result Section styles are now inline */
.result-display .task-status {
  margin-bottom: 0.25rem;
}

/* 结果图片包装器 - 带操作按钮 */
.result-image-wrapper,
.image-preview-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.result-image-wrapper img,
.image-preview-wrapper img {
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  box-sizing: border-box;
}

/* 结果图片操作按钮层 - 在图片右上角 */
.result-image-actions {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
  z-index: 10;
}

/* 图片操作按钮层 - 在图片下方 */
.image-actions-bottom {
  display: flex;
  gap: 0.35rem;
  justify-content: center;
  align-items: center;
}

.action-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 0;
  color: #475569;
}

.action-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.action-btn svg {
  width: 14px;
  height: 14px;
}

.action-btn-zoom:hover {
  background: rgba(102, 126, 234, 0.95);
  color: white;
}

.action-btn-download {
  text-decoration: none;
}

.action-btn-download:hover {
  background: rgba(16, 185, 129, 0.95);
  color: white;
}

.action-btn-clear:hover {
  background: rgba(239, 68, 68, 0.95);
  color: white;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.3px;
}

.status-badge.pending {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  color: #92400e;
  border: 1px solid #fbbf24;
}

.status-badge.processing {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  color: #1e40af;
  border: 1px solid #60a5fa;
  animation: shimmer 2s infinite;
}

.status-badge.completed {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  color: #065f46;
  border: 1px solid #34d399;
}

.status-badge.failed {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  color: #991b1b;
  border: 1px solid #f87171;
}

.result-image {
  text-align: center;
}

.result-image img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.error-message {
  padding: 0.75rem;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.8125rem;
}

.result-display .placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  color: #94a3b8;
  font-size: 1.125rem;
  font-weight: 600;
  background: white;
  border-radius: 8px;
  border: 3px dashed #cbd5e0;
  padding: 0;
  margin: 0;
  max-width: 100%;
}

.result-display .result-image {
  text-align: center;
}

.result-display .result-image img {
  max-width: 100%;
  max-height: 100px;
  border-radius: 8px;
  margin-bottom: 0.35rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

.result-display .result-actions {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.result-display .error-message {
  padding: 0.75rem;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.8125rem;
}

/* History Section (in modal) */
.empty-history {
  text-align: center;
  color: #94a3b8;
  padding: 1.5rem 0.75rem;
  font-weight: 500;
  font-size: 0.8125rem;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-height: 250px;
  overflow-y: auto;
}

.task-list::-webkit-scrollbar {
  width: 4px;
}

.task-list::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 2px;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.625rem;
  background: #f8fafc;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.task-item:hover {
  background: #f1f5f9;
  border-color: #cbd5e0;
}

.task-item.active {
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  border-color: #667eea;
}

.task-info {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.task-time {
  font-size: 0.6875rem;
  font-weight: 500;
  color: #64748b;
}

.task-item.active .task-time {
  color: #667eea;
  font-weight: 600;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-dot.pending {
  background: #f59e0b;
}

.status-dot.processing {
  background: #3b82f6;
  animation: pulse 2s infinite;
}

.status-dot.completed {
  background: #10b981;
}

.status-dot.failed {
  background: #ef4444;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes shimmer {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 5px rgba(96, 165, 250, 0.3);
  }
  50% {
    opacity: 0.9;
    box-shadow: 0 0 15px rgba(96, 165, 250, 0.5);
  }
}

.task-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

.task-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* PC Optimizations */
@media (min-width: 1025px) {
  .main-content {
    padding: 1rem;
  }

  .single-column {
    max-width: 1000px;
  }

  .single-column > .input-section {
    padding: 1rem;
  }

  .form-card {
    margin-bottom: 0.75rem;
    border-radius: 10px;
  }

  .form-card-body {
    padding: 1rem;
  }

  .submit-btn {
    padding: 0.875rem;
    font-size: 1rem;
  }
}

/* Mobile specific optimizations */
@media (max-width: 480px) {
  * {
    box-sizing: border-box;
  }

  .header h1 {
    font-size: 1.125rem;
  }

  .main-content {
    padding: 0.5rem;
    margin-top: 3.5rem;
    max-width: 100%;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .single-column > .input-section {
    padding: 0.5rem;
    border-radius: 8px;
    max-width: 100%;
    width: 100%;
  }

  .form-card-body {
    padding: 0.5rem;
  }

  .result-display .placeholder {
    min-height: 100px;
    font-size: 0.625rem;
    padding: 0.5rem;
  }

  .image-preview-small,
  .upload-placeholder-small {
    width: 65px;
    height: 65px;
  }

  .task-list {
    max-height: 200px;
  }
}

/* iPhone 12/13/14 Pro (390px) */
@media (max-width: 430px) and (min-width: 376px) {
  * {
    box-sizing: border-box;
  }

  .main-content {
    padding: 0.5rem;
    max-width: 100%;
    width: 100%;
  }

  .single-column > .input-section {
    padding: 0.5rem;
    max-width: 100%;
    width: 100%;
  }

  .result-display .placeholder {
    min-height: 100px;
    font-size: 0.625rem;
    padding: 0.5rem;
    max-width: 100%;
  }

  .image-preview-small,
  .upload-placeholder-small {
    width: 65px;
    height: 65px;
  }
}

/* Extra small devices (iPhone SE, iPhone 12/13 mini) */
@media (max-width: 375px) {
  * {
    box-sizing: border-box;
  }

  .main-content {
    padding: 0.375rem;
    margin-top: 3.5rem;
    max-width: 100%;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .single-column > .input-section {
    padding: 0.375rem;
    border-radius: 6px;
    max-width: 100%;
    width: 100%;
  }

  .form-card-body {
    padding: 0.375rem;
  }

  .result-display .placeholder {
    min-height: 90px;
    font-size: 0.625rem;
    padding: 0.4rem;
  }

  .task-list {
    max-height: 180px;
  }

  .image-preview-small,
  .upload-placeholder-small {
    width: 60px;
    height: 60px;
  }

  .checkbox-item {
    padding: 0.3rem 0.4rem;
    font-size: 0.625rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    font-size: 0.75rem;
    padding: 0.4rem;
  }

  .submit-btn {
    padding: 0.625rem;
    font-size: 0.875rem;
  }
}
</style>
