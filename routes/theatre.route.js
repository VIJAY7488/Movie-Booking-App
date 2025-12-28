import theatreController from '../controllers/theatre.controller.js';

const routes = (app) => {
    app.post('/mba/api/v1/theatres', theatreController.createTheatre);
}

export default routes;