import { Router, type Express } from "express";
import { NotesRepository } from "../types";
import NotesController from "./controllers/NotesController";

const createNotesRouter = (repository: NotesRepository) => {
  const notesRouter = Router();
  const notesController = NotesController(repository);

  notesRouter.get("/", notesController.getAllNotes);
  notesRouter.post("/", notesController.createNote);
  notesRouter.put("/:id", notesController.updateNote);
  notesRouter.delete("/:id", notesController.deleteNote);

  return notesRouter;
};

const notesRouterIoC = (app: Express, repository: NotesRepository) => {
  const notesRouter = createNotesRouter(repository);

  app.use("/notes", notesRouter);
};

export default notesRouterIoC;
