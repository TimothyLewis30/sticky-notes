import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import { getNotes, createNote, updateNote, deleteNote } from './api';

function App() {
  const [notes, setNotes] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNote = async (noteData) => {
    try {
      const newNote = await createNote(noteData);
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  const handleUpdateNote = async (noteData) => {
    try {
      const updated = await updateNote(editingNote.id, noteData);
      setNotes(notes.map(n => n.id === editingNote.id ? updated : n));
      setEditingNote(null);
    } catch (error) {
      console.error("Failed to update note:", error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter(n => n.id !== id));
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  const openEditModal = (note) => {
    setEditingNote(note);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data) => {
    if (editingNote) {
      handleUpdateNote(data);
    } else {
      handleCreateNote(data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-yellow-200">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Sticky Notes
          </h1>
          <button
            onClick={() => {
              setEditingNote(null);
              setIsFormOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:shadow-lg active:scale-95"
          >
            <FaPlus size={14} />
            <span className="font-medium">Add Note</span>
          </button>
        </div>
      </header>

      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {notes.map((note) => (
                <Note
                  key={note.id}
                  note={note}
                  onDelete={handleDeleteNote}
                  onEdit={openEditModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && notes.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <p className="text-xl">No notes yet. Create one to get started!</p>
          </div>
        )}
      </main>

      <NoteForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingNote(null);
        }}
        onSubmit={handleFormSubmit}
        initialData={editingNote}
      />
    </div>
  );
}

export default App;
