import theatreService from '../services/theatre.service.js';


const createTheatre = async (req, res) => {
    try {
        const response = await theatreService.createTheatre(req.body);
        if(response.err) {
            return res.status(response.code).json({
                success: false,
                message: response.err
            });
        }
        return res.status(201).json({
            success: true,
            message: "Theatre created successfully",
            data: response
        }); 
    } catch (error) {
        console.error("Error creating theatre:", error);
        res.status(500).json({ error: "Internal server error" }); 
    }
};

const getTheatreById = async (req, res) => {
    try {
        const response = await theatreService.getTheatreById(req.params.id);
        if(response.err) {
            return res.status(response.code).json({
                success: false,
                message: response.err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Theatre fetched successfully",
            data: response
        }); 
    } catch (error) {
        console.error("Error fetching theatre:", error);
        res.status(500).json({ error: "Internal server error" });   
        
    }
};

const deleteTheatreById = async (req, res) => {
    try {
        const response = await theatreService.deleteTheatreById(req.params.id);
        if(response.err) {
            return res.status(response.code).json({
                success: false,
                message: response.err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Theatre deleted successfully",
            data: response
        }); 
    } catch (error) {
        console.error("Error deleting theatre:", error);
        res.status(500).json({ error: "Internal server error" });   
    }
};

const fetchTheatres = async (req, res) => {
    try {
        const response = await theatreService.fetchTheatres(req.query);
        if(response.err) {
            return res.status(response.code).json({
                success: false,
                message: response.err
            });
        }
        return res.status(200).json({
            success: true,
            message: "Theatres fetched successfully",
            data: response
        }); 
    } catch (error) {
        console.error("Error fetching theatres:", error);
        res.status(500).json({ error: "Internal server error" });   
    }
};

export default {
    createTheatre,
    getTheatreById,
    deleteTheatreById,
    fetchTheatres
};