"""In-memory data storage for notes.

This module stores all notes in a Python list (in-memory database).
When the server restarts, all data is lost.
In a production app, you would use a real database like PostgreSQL or MongoDB.
"""

# In-memory list to store all notes
# Each note is a dictionary with id, title, and description
notes = [
    {
        "id": 1,
        "title": "Example Note",
        "description": "This is a sample note stored in memory."
    }
]

# Counter to generate unique IDs for new notes
# Increments each time a new note is created
next_note_id = 2


def get_next_id():
    """Generate the next unique note ID.
    
    Returns:
        int: The next available note ID
    """
    global next_note_id
    current_id = next_note_id
    next_note_id += 1
    return current_id


def reset_data():
    """Reset the notes list to initial state. Useful for testing."""
    global notes, next_note_id
    notes = [
        {
            "id": 1,
            "title": "Example Note",
            "description": "This is a sample note stored in memory."
        }
    ]
    next_note_id = 2
