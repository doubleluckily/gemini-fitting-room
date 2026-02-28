# 👕 AI Virtual Try-On Application - Project Overview

## 🚀 Project Introduction

This is a web-based AI virtual clothing try-on application powered by the Google Gemini API to generate intelligent and realistic virtual fitting results.

---

## 🛠 Tech Stack

- **Frontend**: Vue 3 + Vite  
- **Backend**: Go + Gemini API  
- **Styling**: Native CSS (Light Theme)

---

## 📂 Project Structure

```
doc/
├── main.go                          # Go backend server
├── server                           # Compiled executable
└── web/                             # Frontend project
    ├── src/
    │   ├── App.vue                  # Main application component
    │   └── main.js                  # Entry file
    ├── dist/                        # Build output directory
    ├── index.html                   # HTML template
    ├── package.json                 # npm dependencies
    ├── vite.config.js               # Vite configuration
    ├── README.md                    # Original requirement document
    └── README.dev.md                # Development guide
```

---

## ✨ Core Features

### 📸 1. Image Upload

- ✅ Upload personal model photo  
- ✅ Upload multiple clothing images (up to 5)  
- ✅ Upload accessory images (bags, shoes, etc., up to 3)  
- ✅ Image preview and deletion  

### ⚙️ 2. Personalization Parameters

- ✅ Height and weight configuration  
- ✅ Gender selection  
- ✅ Season selection  
- ✅ Hairstyle description  
- ✅ Background / scene configuration  

### 🤖 3. Virtual Try-On

- ✅ Text description input  
- ✅ Asynchronous task processing  
- ✅ Real-time status tracking (Pending, Processing, Completed, Failed)  
- ✅ Automatic task polling  

### 🖼 4. Result Display

- ✅ Generated try-on image preview  
- ✅ Image download functionality  
- ✅ History record viewing  
- ✅ Task status management  

### 💡 5. User Experience

- ✅ Responsive design  
- ✅ Light-themed interface  
- ✅ Loading state indicators  
- ✅ Error notifications  

---

## 🔌 API Endpoints

### POST /api/tryon
Create a new virtual try-on task.

### GET /api/tasks/{taskId}
Retrieve the status of a specific task.

### GET /api/tasks
Retrieve the list of all tasks.

---

## ⚡ Quick Start

### 1️⃣ Install Dependencies

```bash
cd web
npm install
```

### 2️⃣ Configure API Key

```bash
export GEMINI_API_KEY="your-api-key"
```

### 3️⃣ Start the Application

#### 🧪 Development Mode

```bash
# Terminal 1: Start backend
go run main.go

# Terminal 2: Start frontend
cd web
npm run dev
```

#### 🚀 Production Mode

```bash
# Build frontend
cd web
npm run build

# Start backend (serves static frontend files automatically)
cd ..
go run main.go
```

### 🌐 4️⃣ Access the Application

- Development Mode: http://localhost:3000  
- Production Mode: http://localhost:8080  

---

## 🏗 Backend Architecture

### 🖥 Go Server

- **Port**: 8080  
- **CORS**: Enabled  
- **Static File Service**: ./web/dist  
- **Task Storage**: In-memory storage (can be extended to a database)

### 🔄 API Implementation

- handleTryOn: Handles try-on requests and creates tasks  
- processTryOnTask: Asynchronously processes tasks and calls Gemini API  
- handleGetTask: Retrieves a single task status  
- handleListTasks: Retrieves all tasks  

### 🧠 Gemini Integration

- Model: gemini-2.0-flash-exp  
- Supports multiple image inputs  
- Timeout setting: 5 minutes  
- Base64 image transmission  

---

## 🧩 Frontend Architecture

### ⚛ Vue 3 Components

- **Reactive Data**: Vue 3 Composition API  
- **State Management**: Local component state  
- **HTTP Requests**: Axios  
- **Polling Mechanism**: Automatic task status checking  

### 🖥 Layout

- **Left Panel**: Input section (image upload, parameter configuration)  
- **Right Panel**: Result display (current task and history records)  

### 🎨 Styling Design

- **Theme**: Light theme with purple gradient primary color  
- **Responsive**: Mobile and desktop supported  
- **Interaction**: Hover effects and smooth transitions  

---

## 🔄 Data Flow

1. User uploads images → Converted to Base64  
2. Click "Start Try-On" → POST /api/tryon  
3. Backend creates task → Returns taskId  
4. Frontend starts polling → GET /api/tasks/{taskId}  
5. Backend calls Gemini API → Processes images  
6. Generated result returned → Displayed on frontend  
7. Saved into history records  

---

## 🔮 Future Improvements

### 🚀 Feature Enhancements

- [ ] Database integration (PostgreSQL / MongoDB)  
- [ ] User authentication system  
- [ ] More model selection options  
- [ ] Batch processing  
- [ ] Image editing features  

### ⚡ Performance Optimization

- [ ] Redis caching  
- [ ] CDN-based image storage  
- [ ] Task queue system  
- [ ] WebSocket real-time updates  

### 🎯 UI/UX Improvements

- [ ] Dark theme  
- [ ] Multi-language support  
- [ ] Drag-and-drop image upload  
- [ ] Progress bar display  

---

## 📚 Documentation

- **Frontend Development Guide**: web/README.dev.md  
- **Requirement Document**: web/README.md  

---

## ⚠ Notes

1. API Key: A valid Google Gemini API key is required  
2. Network: Accessing Google API may require proxy configuration  
3. Storage: In-memory storage is used; data will be lost after restart  
4. Performance: Large images may require longer processing time  

---

## 📬 Contact

Email: doubleluckily@hotmail.com

---

## 📄 License

MIT License  

