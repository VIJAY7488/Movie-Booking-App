import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import MovieRoutes from './routes/movies.routes.js';
import theatreRoutes from './routes/theatre.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

MovieRoutes(app); // invoking movie routes
theatreRoutes(app); // invoking theatre routes

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