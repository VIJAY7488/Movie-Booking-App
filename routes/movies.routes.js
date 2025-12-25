import MovieController from "../controllers/movies.controller.js";


const routes = (app) => {
    app.post('/mba/api/v1/movies', MovieController.createMovie);
    app.get('/mba/api/v1/movies/:id', MovieController.getMovie);
    app.delete('/mba/api/v1/movies/:id', MovieController.deleteMovie);
}

export default routes;