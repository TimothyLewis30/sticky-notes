import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const colors = [
    "#feff9c", // Yellow
    "#ff7eb9", // Pink
    "#7afcff", // Blue
    "#fff740", // Bright Yellow
    "#98ff98", // Mint
    "#e6c9ff", // Lavender
];

const NoteForm = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState(colors[0]);

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setContent(initialData.content);
            setColor(initialData.color);
        } else {
            setTitle('');
            setContent('');
            setColor(colors[0]);
        }
    }, [initialData, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content, color });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                >
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {initialData ? 'Edit Note' : 'New Note'}
                            </h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <FaTimes size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full text-lg font-semibold placeholder-gray-400 border-none outline-none focus:ring-0 bg-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Write something..."
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full h-32 resize-none placeholder-gray-400 border-none outline-none focus:ring-0 bg-transparent"
                                    required
                                />
                            </div>

                            <div className="flex gap-2 py-2">
                                {colors.map((c) => (
                                    <button
                                        key={c}
                                        type="button"
                                        onClick={() => setColor(c)}
                                        className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${color === c ? 'border-gray-600 scale-110' : 'border-transparent'
                                            }`}
                                        style={{ backgroundColor: c }}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                                >
                                    {initialData ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default NoteForm;
