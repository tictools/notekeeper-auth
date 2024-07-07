import { Request, Response } from "express";
import { UUID } from "../shared/services/types";

export const NOTE_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in progress",
  DONE: "done",
} as const;

export type STATUS = (typeof NOTE_STATUS)[keyof typeof NOTE_STATUS];

export type NoteFromRequest = {
  name?: string;
  description?: string;
  status?: string;
  dueDate?: string;
};

export type Note = {
  _id: UUID;
  name: string;
  description: string;
  important: boolean;
  status: STATUS;
  due_date: string;
  created_at: number;
};

export type NoteDTO = {
  id: UUID;
  name: string;
  description: string;
  important: boolean;
  status: STATUS;
  dueDate: string;
  createdAt: number;
};

export interface NotesRepository {
  getAllNotes: () => Promise<Note[]>;
  getNote: (index: number) => Promise<Note | null>;
  addNote: (note: Note) => Promise<void>;
  updateNote: (index: number, note: Note) => Promise<void>;
  removeNote: (index: number) => Promise<Note[]>;
  findIndexNoteById: (noteId: UUID) => Promise<number>;
  removeAllNotes: () => Promise<void>;
}

export type RequestWithNote = Request<
  Record<string, UUID>,
  Record<string, unknown>,
  Note
>;

export type SuccessResponse = NoteDTO;

export type ErrorResponse = {
  error: string;
};

export type ResponseWithNoteOrError = Response<SuccessResponse | ErrorResponse>;

export type ResponseWithNotesDTO = Response<{
  notes: SuccessResponse[];
}>;
