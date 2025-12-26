import mongoose from "mongoose";


const moviesSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 2 },
    description: { type: String, required: true },
    casts: { type: [String], required: true },
    trailerUrl: { type: String, required: true },
    language: { type: [String], required: true },
    releaseDate: { type: String, required: true },
    director: { type: String, required: true },
    releaseStatus: { type: String, required: true, default: "Released" },
}, { timestamps: true });

const Movies = mongoose.model("Movies", moviesSchema);

export default Movies;