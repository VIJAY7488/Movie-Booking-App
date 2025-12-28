import theatreController from '../controllers/theatre.controller.js';
import validateTheatreCreateRequest from '../middlewares/theatre.middleware.js';

const routes = (app) => {
    app.post('/mba/api/v1/theatres', validateTheatreCreateRequest, theatreController.createTheatre);
}

export default routes;