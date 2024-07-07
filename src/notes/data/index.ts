import { uniqueIdentifierService } from "../../shared/services";
import { NOTE_STATUS, type Note } from "../types";

const uuidService = uniqueIdentifierService();

const notes: Note[] = [
  {
    _id: uuidService.generate(),
    name: "Walk the dog",
    description: "Go to the park",
    important: false,
    status: NOTE_STATUS.IN_PROGRESS,
    due_date: "5/1/2024",
    created_at: 1714552849902,
  },
];

export default notes;
