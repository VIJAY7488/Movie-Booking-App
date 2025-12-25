import Movie from '../models/movies.model.js';   


const getMovieById = async (movieId) => {
    const movie = await Movie.findById(movieId);
    if(!movie) {
        return {
            err: "No movie found with the given ID",
            code: 404,
            message: "Something went wrong while fetching the movie"
        }
    }
    return  movie;
}


const deleteMovieById = async (movieId) => {
    const movie = await Movie.findByIdAndDelete(movieId);
    if(!movie) {
        return {
            err: "No movie found with the given ID",
            code: 404,
            message: "Something went wrong while deleting the movie"
        }
    }
    return  movie;
}

export default {
    getMovieById,
    deleteMovieById
}