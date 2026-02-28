## AI Virtual Try-On Application (Frontend Project)

### 1. Project Overview

This project is a web-based AI virtual try-on application that allows users to upload their own photos and experiment with different clothing styles to achieve realistic virtual fitting results.

The system is built using **Vue.js** for the frontend, **Golang** for the backend, and **Gemini** for AI-powered image processing and generation.

---

### 2. Tech Stack

- **Frontend:** Vue.js  
- **Backend:** Golang  
- **AI Image Processing:** Gemini  

---

### 3. Features

#### User Input Options

- Text description (prompt-based styling)
- Upload a custom personal photo
- Select from provided model templates
- Upload clothing items such as outfits, shoes, hats, bags, and accessories

#### Virtual Try-On Generation

- Generate realistic virtual try-on results using AI

#### Personalization Options

- Customize height and weight for more accurate fitting
- Select gender
- Choose seasonal styles
- Select different hairstyles
- Choose different backgrounds and scenes

#### Task-Based Processing

- Clicking the **"Try On"** button creates a generation task
- Users can:
  - Wait on the page for the result to be generated
  - View task status in a task list (Processing, Completed, Failed)
  - Access results from completed tasks

#### Result Management

- Save generated try-on results

#### UI Design

- Clean interface with a light-themed color scheme
