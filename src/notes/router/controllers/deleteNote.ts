import {
  NotesRepository,
  type Note,
  type RequestWithNote,
  type ResponseWithNoteOrError,
} from "../../types.js";
import { checkElementExistsBasedOn } from "../../utils/index.js";
import { noteMapper } from "../mappers";

const deleteNote = (repository: NotesRepository) => {
  return async (req: RequestWithNote, res: ResponseWithNoteOrError) => {
    const { id: noteId } = req.params;

    const elementIndex = await repository.findIndexNoteById(noteId);

    const elementExists = checkElementExistsBasedOn({ elementIndex });

    if (!elementExists) {
      return res
        .status(404)
        .json({ error: `Note with id ${noteId} does not exist` });
    }

    const deletedNote = (await repository.getNote(elementIndex)) as Note;

    await repository.removeNote(elementIndex);

    const deletedNoteDTO = noteMapper.toDTO(deletedNote);

    return res.status(200).json(deletedNoteDTO);
  };
};

export default deleteNote;
