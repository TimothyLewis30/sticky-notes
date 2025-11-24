from fastapi import APIRouter, HTTPException
from uuid import UUID
from ..dao import get_all_notes, create_note, update_note, delete_note
from ..models.note import Note, NoteCreate

router = APIRouter()

@router.get("/notes", response_model=list[Note])
async def get_notes():
    return get_all_notes()

@router.post("/notes", response_model=Note)
async def add_note(note: NoteCreate):
    return create_note(note)

@router.put("/notes/{note_id}", response_model=Note)
async def edit_note(note_id: UUID, note: NoteCreate):
    try:
        return update_note(note_id, note)
    except ValueError:
        raise HTTPException(status_code=404, detail="Note not found")

@router.delete("/notes/{note_id}")
async def remove_note(note_id: UUID):
    try:
        delete_note(note_id)
        return {"message": "Note deleted"}
    except ValueError:
        raise HTTPException(status_code=404, detail="Note not found")
