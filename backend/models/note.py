from pydantic import BaseModel
from uuid import UUID

class NoteBase(BaseModel):
    title: str
    content: str
    color: str = "#feff9c"  # Default yellow

class NoteCreate(NoteBase):
    pass

class Note(NoteBase):
    id: UUID
