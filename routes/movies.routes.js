import MovieController from "../controllers/movies.controller.js";


const routes = (app) => {
    app.post('/mba/api/v1/movies', MovieController.createMovie)
}

export default routes;