import Movie from '../models/movies.model.js';   
 

const createMovie = async (movieData) => {
    const movie = new Movie(movieData);
    await movie.save();
    return movie;
}

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
};


const updateMovie = async (movieId, updateData) => {
    try {
        const movie = await Movie.findByIdAndUpdate(movieId, updateData, { new: true, runValidators: true });
        return movie;
    } catch (error) {
        if(error.name === 'ValidationError') {
            let errMsg = {};
            Object.keys(error.errors).forEach((key) => {
                errMsg[key] = error.errors[key].message;
            });
            console.log(errMsg);
            return {err: errMsg, code: 422};
        }
        else {
            throw error;
        }
    }
};


const fetchMovies = async (filter) => {
    let query = {};
    if (filter.name) {
        query.name = filter.name;
    }
    let movies = await Movie.find(query);
    if(!movies) {
        return {
            err: "No movies found",
            code: 404,
            message: "Something went wrong while fetching the movies"
        }
    }
    return movies;
}


export default {
    createMovie,
    getMovieById,
    deleteMovieById,
    updateMovie,
    fetchMovies
}