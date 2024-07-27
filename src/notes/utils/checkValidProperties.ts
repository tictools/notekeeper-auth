import { Note } from "../types";

const VALID_PROPERTIES = [
  "name",
  "description",
  "important",
  "status",
  "dueDate",
];

const checkValidProperties = (noteContent: Note): number => {
  return Object.keys(noteContent).filter(
    (key) => !VALID_PROPERTIES.includes(key)
  ).length;
};

export default checkValidProperties;
