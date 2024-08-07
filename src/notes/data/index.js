import { uniqueIdentifierService } from "../../shared/services";

const uuidService = uniqueIdentifierService();

const STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in progress",
  DONE: "done",
};

const notes = [
  {
    _id: uuidService.generate(),
    name: "Walk the dog",
    description: "Go to the park",
    important: false,
    status: STATUS.PENDING,
    due_date: "5/1/2024",
    created_at: 1714552849902,
  },
];

export default notes;
