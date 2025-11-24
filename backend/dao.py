from typing import List
from uuid import UUID, uuid4
from .models.note import Note, NoteCreate

# In-memory storage for notes
_notes_db: List[Note] = []

def get_all_notes() -> List[Note]:
    return _notes_db

def create_note(note_create: NoteCreate) -> Note:
    new_note = Note(id=uuid4(), **note_create.dict())
    _notes_db.append(new_note)
    return new_note

def update_note(note_id: UUID, note_update: NoteCreate) -> Note:
    for i, note in enumerate(_notes_db):
        if note.id == note_id:
            updated = Note(id=note_id, **note_update.dict())
            _notes_db[i] = updated
            return updated
    raise ValueError("Note not found")

def delete_note(note_id: UUID) -> None:
    for i, note in enumerate(_notes_db):
        if note.id == note_id:
            del _notes_db[i]
            return
    raise ValueError("Note not found")
