import { type Request } from "express";
import { uniqueIdentifierService } from "../../../shared/services/index.js";
import { NotesRepository, type ResponseWithNoteOrError } from "../../types.js";
import { checkNoteDataIsIncomplete } from "../../utils";
import noteMapper from "../mappers/noteMapper.js";

const uuidService = uniqueIdentifierService();

const createNote = (repository: NotesRepository) => {
  return async (req: Request, res: ResponseWithNoteOrError) => {
    const note = req.body;

    const isNoteDataIncomplete = checkNoteDataIsIncomplete(note);

    if (isNoteDataIncomplete) {
      return res.status(400).json({ error: "Missing data." });
    }

    const newNote = {
      ...note,
      _id: uuidService.generate(),
      created_at: Date.now(),
    };

    await repository.addNote(newNote);

    const noteDTO = noteMapper.toDTO(newNote);

    return res.status(201).json(noteDTO);
  };
};

export default createNote;
