import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the Movie Booking App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    mongoose.connect(process.env.DB_URL);
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
});