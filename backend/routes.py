"""API route definitions for the Notes backend."""

from fastapi import APIRouter, HTTPException, status
from typing import List
from models import LoginRequest, NoteResponse, NoteCreate, NoteUpdate
from data import notes, get_next_id

router = APIRouter()

# Hardcoded credentials for login
VALID_USERNAME = "admin"
VALID_PASSWORD = "admin123"


@router.post("/login")
def login(request: LoginRequest):
    """User login endpoint.
    
    Validates username and password against hardcoded credentials.
    
    Args:
        request: LoginRequest containing username and password
        
    Returns:
        dict: Success message with "message" key if credentials are valid
        
    Raises:
        HTTPException: 401 Unauthorized if credentials are invalid
    """
    # Check if username and password match hardcoded credentials
    if request.username == VALID_USERNAME and request.password == VALID_PASSWORD:
        return {
            "message": "Login successful",
            "username": request.username
        }
    else:
        # Return 401 Unauthorized with error message
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password"
        )


@router.get("/notes", response_model=List[NoteResponse])
def get_all_notes():
    """Retrieve all notes.
    
    Returns:
        List[NoteResponse]: List of all notes in the database
    """
    return notes


@router.post("/notes", response_model=NoteResponse, status_code=status.HTTP_201_CREATED)
def create_note(note_data: NoteCreate):
    """Create a new note.
    
    Args:
        note_data: NoteCreate object containing title and description
        
    Returns:
        NoteResponse: The newly created note with id, title, and description
    """
    # Generate a unique ID for the new note
    new_id = get_next_id()
    
    # Create the note dictionary
    new_note = {
        "id": new_id,
        "title": note_data.title,
        "description": note_data.description
    }
    
    # Add the note to the in-memory storage
    notes.append(new_note)
    
    # Return the created note
    return new_note


@router.put("/notes/{note_id}", response_model=NoteResponse)
def update_note(note_id: int, note_data: NoteUpdate):
    """Update an existing note.
    
    Args:
        note_id: The ID of the note to update
        note_data: NoteUpdate object containing updated title and description
        
    Returns:
        NoteResponse: The updated note
        
    Raises:
        HTTPException: 404 Not Found if the note with the given ID doesn't exist
    """
    # Find the note with the given ID
    for note in notes:
        if note["id"] == note_id:
            # Update the note fields
            note["title"] = note_data.title
            note["description"] = note_data.description
            return note
    
    # If we reach here, note was not found
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Note with id {note_id} not found"
    )


@router.delete("/notes/{note_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_note(note_id: int):
    """Delete an existing note.
    
    Args:
        note_id: The ID of the note to delete
        
    Raises:
        HTTPException: 404 Not Found if the note with the given ID doesn't exist
    """
    # Find the note with the given ID and remove it
    for i, note in enumerate(notes):
        if note["id"] == note_id:
            # Remove the note from the list
            notes.pop(i)
            # Return nothing (204 No Content)
            return
    
    # If we reach here, note was not found
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Note with id {note_id} not found"
    )
