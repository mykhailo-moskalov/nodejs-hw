// / Libraries
import createHttpError from 'http-errors';
import mongoose from 'mongoose';
// / Model
import { Note } from '../models/note.js';

// / GET
export const getAllNotes = async (req, res) => {
  const notes = await Note.find();

  res.status(200).json(notes);
};
// / GET
export const getNoteById = async (req, res) => {
  const { noteId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw createHttpError(404, 'Invalid note ID');
  }

  const note = await Note.findById(noteId);

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};

// / POST
export const createNote = async (req, res) => {
  const note = await Note.create(req.body);

  res.status(201).json(note);
};

// / DELETE
export const deleteNote = async (req, res) => {
  const { noteId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw createHttpError(404, 'Invalid note ID');
  }

  const note = await Note.findOneAndDelete({
    _id: noteId,
  });

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};

// / PATCH
export const updateNote = async (req, res) => {
  const { noteId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw createHttpError(404, 'Invalid note ID');
  }

  const note = await Note.findOneAndUpdate({ _id: noteId }, req.body, {
    new: true,
  });

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};
