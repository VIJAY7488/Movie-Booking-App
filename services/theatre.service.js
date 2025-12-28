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
        console.error("Error creating theatre:", error);
        throw error;
    }
}


export default {
    createTheatre
};