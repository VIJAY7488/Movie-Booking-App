import Movies from "../models/movies.model.js";

const createMovie = async(req, res) => {
    try {
        const movie = new Movies(req.body);
        await movie.save();
        return res.status(201).json({
            success: true,
            message: "Movie created successfully",
            data: movie
        });
    } catch (error) {
        console.error("Error creating movie:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export default {
    createMovie
}