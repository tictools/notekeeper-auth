import { Request } from "express";
import { NotesRepository, type ResponseWithNotesDTO } from "../../types";
import { noteMapper } from "../mappers";

const getAllNotes = (repository: NotesRepository) => {
  return async (_req: Request, res: ResponseWithNotesDTO) => {
    const notes = await repository.getAllNotes();

    const notesDTO = notes.map(noteMapper.toDTO);

    return res.json({ notes: notesDTO });
  };
};

export default getAllNotes;
