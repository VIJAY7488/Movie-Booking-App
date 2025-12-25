import Movies from "../models/movies.model.js";
import movieService from "../services/movie.service.js";

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
};

const getMovie = async(req, res) => {
    try {
        const response = await movieService.getMovieById(req.params.id);
        if (response.err) {
            return res.status(response.code).json({
                success: false,
                message: response.err
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "Movie fetched successfully",
            data: response
        });
    } catch (error) {
        console.error("Error fetching movie:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const deleteMovie = async(req, res) => {
    try {
        const response = await movieService.deleteMovieById(req.params.id);
        if (response.err) {
            return res.status(response.code).json({
                success: false,
                message: response.err
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "Movie deleted successfully",
            data: response
        });
    } catch (error) {
        console.error("Error deleting movie:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"    
        });
    }
};

export default {
    createMovie,
    getMovie,
    deleteMovie
}