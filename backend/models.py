"""Pydantic models for the Notes API.

These models define the structure of requests and responses.
Pydantic validates incoming data and converts it to Python objects.
"""

from pydantic import BaseModel, Field


class LoginRequest(BaseModel):
    """Request model for user login.
    
    Attributes:
        username: The user's login username
        password: The user's login password
    """
    username: str = Field(..., min_length=1, description="Username for login")
    password: str = Field(..., min_length=1, description="Password for login")


class NoteCreate(BaseModel):
    """Request model for creating a new note.
    
    Attributes:
        title: The title of the note
        description: The detailed description of the note
    """
    title: str = Field(..., min_length=1, description="Title of the note")
    description: str = Field(..., min_length=1, description="Description of the note")


class NoteUpdate(BaseModel):
    """Request model for updating an existing note.
    
    Attributes:
        title: The updated title of the note
        description: The updated description of the note
    """
    title: str = Field(..., min_length=1, description="Updated title of the note")
    description: str = Field(..., min_length=1, description="Updated description of the note")


class NoteResponse(BaseModel):
    """Response model for a note object.
    
    Attributes:
        id: Unique identifier for the note
        title: The title of the note
        description: The description of the note
    """
    id: int = Field(..., description="Unique identifier for the note")
    title: str = Field(..., description="Title of the note")
    description: str = Field(..., description="Description of the note")
