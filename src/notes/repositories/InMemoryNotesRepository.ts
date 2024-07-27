import { Note, NotesRepository } from "../types.js";

const InMemoryNotesRepository = (notes: Note[]): NotesRepository => ({
  getAllNotes: async () => {
    return Promise.resolve(notes ?? []);
  },

  getNote: async (index) => {
    return Promise.resolve(notes[index] ?? null);
  },

  addNote: async (note) => {
    notes.push(note);
  },

  updateNote: async (index, note) => {
    notes[index] = note;
  },

  removeNote: async (index) => {
    return Promise.resolve(notes.splice(index, 1));
  },

  findIndexNoteById: async (noteId) => {
    return Promise.resolve(notes.findIndex((note) => note._id === noteId));
  },

  removeAllNotes: async () => {
    notes.length = 0;
  },
});

export default InMemoryNotesRepository;
