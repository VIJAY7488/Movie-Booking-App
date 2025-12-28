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
};


const deleteTheatreById = async (theatreId) => {
    const theatre = await Theatre.findByIdAndDelete(theatreId);
    if(!theatre) {
        return {
            err: "No theatre found with the given ID",
            code: 404,
            message: "Something went wrong while deleting the theatre"
        }
    }
    return  theatre;
};

const fetchTheatres = async (filter) => {
    let query = {};
    if (filter.name) {
            query.name = filter.name;
        }
        let theatres = await Theatre.find(query);
        if(!theatres) {
            return {
                err: "No theatres found",
                code: 404,
                message: "Something went wrong while fetching the theatres"
            }
        }
    return theatres;   
};


const updateTheatre = async (theatreId, updatedData) => {
    try {
        const theatre = await Theatre.findByIdAndUpdate(theatreId, updatedData, 
            { new: true, runValidators: true});
            if(!theatre) {
                return {
                    err: "No theatre found with the given ID",
                    code: 404,
                    message: "Something went wrong while updating the theatre"
                }
            }
        return theatre;
    }
    catch (error) {
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
}
 

export default {
    createTheatre,
    getTheatreById,
    deleteTheatreById,
    fetchTheatres,
    updateTheatre
};