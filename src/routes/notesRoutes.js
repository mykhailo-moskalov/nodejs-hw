// / Library
import { Router } from 'express';
// / Controllers
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
// / Middleware
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

// ! Midlleware
router.use('/notes', authenticate);

// ! GET
router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

// ! POST
router.post('/notes', celebrate(createNoteSchema), createNote);

// ! DELETE
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

// ! PATCH
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
