// / Library
import mongoose from 'mongoose';
import { Note } from '../models/note.js';

export const connectMongoDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URL;

    await mongoose.connect(mongoUri);

    console.log('✅ MongoDB connection established successfully');

    await Note.syncIndexes();
    console.log('Indexes synced successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);

    process.exit(1);
  }
};
