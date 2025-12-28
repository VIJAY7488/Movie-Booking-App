import Theatre from "../models/theatre.model.js";


const createTheatre = async (theatreData) => {
    try {
        const theatre = await Theatre.create(theatreData);
        if(!theatre) {
            return {
                err: "Theatre could not be created",
                code: 500,
                message: "Something went wrong while creating the theatre"
            }
        }
        return theatre;
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

const getTheatreById = async (theatreId) => {
    const theatre = await Theatre.findById(theatreId);
    if (!theatre) {
        return {
            err: "No theatre found with the given ID",
            code: 404,
            message: "Something went wrong while fetching the theatre"
        }
    };
    return theatre;
}


export default {
    createTheatre,
    getTheatreById
};