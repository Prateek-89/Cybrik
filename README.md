# Cybrik — Full-Stack Notes Application

A full-stack notes management application built with **FastAPI** (Python) on the backend and **Next.js 15** (React 19, TypeScript, Tailwind CSS) on the frontend.

## Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| **Backend** | Python, FastAPI, Uvicorn                        |
| **Frontend**| Next.js 15, React 19, TypeScript, Tailwind CSS  |
| **API Client** | Axios                                        |
| **Data**    | In-memory storage (Python list)                 |

---

## Prerequisites

- **Python** 3.9 or higher
- **Node.js** 18 or higher
- **npm** (comes with Node.js)

---

## Project Structure

```
Cybrik/
├── backend/
│   ├── main.py              # FastAPI application entry point
│   ├── models.py            # Pydantic models (request/response validation)
│   ├── routes.py            # API route definitions
│   ├── data.py              # In-memory data storage
│   ├── requirements.txt     # Python dependencies
│   └── README.md
│
├── frontend/
│   ├── app/                 # Next.js App Router pages
│   │   ├── login/           # Login page
│   │   ├── dashboard/       # Dashboard page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable React components
│   ├── services/            # API client (Axios)
│   ├── types/               # TypeScript type definitions
│   ├── public/              # Static assets
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Setup Instructions

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Create a Python virtual environment (recommended)
python3 -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the backend server
uvicorn main:app --reload
```

The backend will start at **http://localhost:8000**.

- **API Docs (Swagger UI):** http://localhost:8000/docs
- **Health Check:** http://localhost:8000/

### 2. Frontend Setup

Open a **new terminal** (keep the backend running).

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will start at **http://localhost:3000**.

### 3. Environment Configuration (Optional)

The frontend connects to the backend via the `NEXT_PUBLIC_API_URL` environment variable. By default, it points to `http://localhost:8000`.

To override, create a `.env.local` file in the `frontend/` directory:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## Default Login Credentials

| Field    | Value      |
|----------|------------|
| Username | `admin`    |
| Password | `admin123` |

---

## API Endpoints

| Method | Endpoint          | Description          | Auth Required |
|--------|-------------------|----------------------|---------------|
| POST   | `/login`          | User login           | No            |
| GET    | `/notes`          | Get all notes        | No            |
| POST   | `/notes`          | Create a new note    | No            |
| PUT    | `/notes/{id}`     | Update a note by ID  | No            |
| DELETE | `/notes/{id}`     | Delete a note by ID  | No            |

> **Note:** Authentication is simulated with hardcoded credentials. No real authentication is enforced on the notes endpoints in this demo.

---

## Running Both Services

You need **two terminal windows**:

| Terminal | Command                          | URL                     |
|----------|----------------------------------|-------------------------|
| 1        | `cd backend && uvicorn main:app --reload` | http://localhost:8000   |
| 2        | `cd frontend && npm run dev`     | http://localhost:3000   |

Open **http://localhost:3000** in your browser to use the application.

---

## License

This project is for educational/demonstration purposes.