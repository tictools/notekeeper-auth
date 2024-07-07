import { NotesRepository } from "../../types";
import createNote from "./createNote";
import deleteNote from "./deleteNote";
import getAllNotes from "./getAllNotes";
import updateNote from "./updateNote";

const NotesController = (repository: NotesRepository) => ({
  getAllNotes: getAllNotes(repository),
  createNote: createNote(repository),
  updateNote: updateNote(repository),
  deleteNote: deleteNote(repository),
});

export default NotesController;
