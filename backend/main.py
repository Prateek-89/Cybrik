"""Main entry point for the FastAPI backend."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router

# Create the FastAPI application instance
app = FastAPI(
    title="Notes App API",
    description="A simple Notes API with login and CRUD operations",
    version="1.0.0"
)

# Enable CORS (Cross-Origin Resource Sharing)
# This allows the frontend to make requests to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Register all routes from routes.py
app.include_router(router)

# Root route for health check
@app.get("/")
def read_root():
    """Health check endpoint."""
    return {"message": "Notes API is running"}
