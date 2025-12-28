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
}

export default {
    createTheatre
};