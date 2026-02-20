// / Library
import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    await mongoose.connect(mongoUri);

    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);

    process.exit(1);
  }
};
