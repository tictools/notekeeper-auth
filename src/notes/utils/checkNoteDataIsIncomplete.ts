import { type NoteFromRequest } from "../types";

const checkNoteDataIsIncomplete = (note: NoteFromRequest) => {
  return (
    !note?.name ||
    !note?.name?.trim() ||
    !note?.description ||
    !note?.description?.trim() ||
    !note?.status ||
    !note?.status?.trim() ||
    !note?.dueDate ||
    !note?.dueDate?.trim()
  );
};

export default checkNoteDataIsIncomplete;
