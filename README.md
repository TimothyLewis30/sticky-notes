# 📝 Sticky Notes Application

A modern, full-stack web application for creating, editing, and managing digital sticky notes with a beautiful and intuitive interface.

![Sticky Notes App](https://img.shields.io/badge/Status-Active-success) ![Python](https://img.shields.io/badge/Python-3.9+-blue) ![React](https://img.shields.io/badge/React-18+-61DAFB) ![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688)

## ✨ Features

- ✅ **Create Notes**: Add new sticky notes with custom titles, content, and colors
- ✏️ **Edit Notes**: Update existing notes with ease
- 🗑️ **Delete Notes**: Remove notes you no longer need
- 🎨 **Color Customization**: Choose from 6 vibrant colors for your notes
- ⚡ **Smooth Animations**: Powered by Framer Motion for delightful user experience
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔄 **Real-time Updates**: Changes reflect immediately without page refresh

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server
- **Python 3.9+**

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **React Icons** - Icon library

## 📁 Project Structure

```
sticky-notes/
├── backend/
│   ├── controller/
│   │   └── note_controller.py    # API endpoints
│   ├── models/
│   │   └── note.py                # Pydantic models
│   ├── dao.py                     # Data Access Object
│   ├── app.py                     # FastAPI application
│   ├── main.py                    # Entry point
│   └── requirements.txt           # Python dependencies
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Note.jsx           # Note card component
    │   │   └── NoteForm.jsx       # Create/Edit modal
    │   ├── api.js                 # API service
    │   ├── App.jsx                # Main application
    │   └── index.css              # Global styles
    ├── package.json
    └── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- **Python 3.9+**
- **Node.js 20.19+** or **22.x LTS**
- **npm** or **yarn**

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/sticky-notes.git
cd sticky-notes
```

#### 2. Setup Backend
```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt
```

#### 3. Setup Frontend
```bash
# Navigate to frontend directory
cd frontend

# Install Node dependencies
npm install
```

### Running the Application

#### Start Backend Server
```bash
# From project root directory
uvicorn backend.main:app --reload
```
Backend will run at: **http://localhost:8000**

API Documentation (Swagger UI): **http://localhost:8000/docs**

#### Start Frontend Server
```bash
# From frontend directory
cd frontend
npm run dev
```
Frontend will run at: **http://localhost:5173**

## 📡 API Endpoints

| Method | Endpoint           | Description          |
|--------|-------------------|----------------------|
| GET    | `/notes`          | Get all notes        |
| POST   | `/notes`          | Create a new note    |
| PUT    | `/notes/{id}`     | Update a note        |
| DELETE | `/notes/{id}`     | Delete a note        |

### Example Request

**Create a Note:**
```bash
curl -X POST http://localhost:8000/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Note",
    "content": "This is my first sticky note!",
    "color": "#feff9c"
  }'
```

## 🎨 Available Note Colors

- 🟡 Yellow (`#feff9c`)
- 🌸 Pink (`#ff7eb9`)
- 💙 Cyan (`#7afcff`)
- ⭐ Bright Yellow (`#fff740`)
- 🍃 Mint (`#98ff98`)
- 💜 Lavender (`#e6c9ff`)

## 🖼️ Screenshots

![Application Screenshot](file:///C:/Users/lewis/.gemini/antigravity/brain/b65eb90a-5c8b-4a1c-8871-8f93e4725f60/initial_state_1763908385425.png)

*Main interface with sticky notes*

## 🔮 Future Improvements

- [ ] Persistent storage with PostgreSQL/MongoDB
- [ ] User authentication and authorization
- [ ] Note categories/tags
- [ ] Search and filter functionality
- [ ] Rich text editor for note content
- [ ] Drag-and-drop note positioning
- [ ] Export notes as PDF/Markdown
- [ ] Dark mode support
- [ ] Collaborative notes (real-time sharing)

⭐ If you found this project helpful, please consider giving it a star!
