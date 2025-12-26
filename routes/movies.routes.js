import MovieController from "../controllers/movies.controller.js";
import validateMovieCrteateRequest  from "../middlewares/movie.middleware.js";


const routes = (app) => {
    app.post('/mba/api/v1/movies', validateMovieCrteateRequest, MovieController.createMovie);
    app.get('/mba/api/v1/movies/:id', MovieController.getMovie);
    app.delete('/mba/api/v1/movies/:id', MovieController.deleteMovie);
    app.put('/mba/api/v1/movies/:id', MovieController.updateMovie);
    app.get('/mba/api/v1/movies', MovieController.getMovies);
}

export default routes;