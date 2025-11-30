import React from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Note = ({ note, onDelete, onEdit }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 1, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative p-5 rounded-xl shadow-lg flex flex-col justify-between h-64 w-64 text-gray-800 overflow-hidden backdrop-blur-sm group"
            style={{ backgroundColor: note.color }}
        >
            <div>
                <h3 className="font-bold text-xl mb-2 break-words">{note.title}</h3>
                <p className="text-sm whitespace-pre-wrap break-words opacity-90">{note.content}</p>
            </div>

            <div className="flex justify-end gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                    onClick={() => onEdit(note)}
                    className="p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                >
                    <FaPen size={14} />
                </button>
                <button
                    onClick={() => onDelete(note.id)}
                    className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-700 rounded-full transition-colors"
                >
                    <FaTrash size={14} />
                </button>
            </div>

            {/* Hover overlay for better interaction visibility */}
            <div className="absolute inset-0 hover:bg-black/5 transition-colors pointer-events-none rounded-xl" />
        </motion.div>
    );
};

export default Note;
