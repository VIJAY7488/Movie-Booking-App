const badRequestResponse = {
    success: false,
    err: "",
    data: {},
    message: "Malformed request | Bad Request"
}

const validateMovieCreateRequest = async (req, res, next) => {
    // Validate the movie name
    if (!req.body.name) {
        badRequestResponse.err = "The name of the movie is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };
    
    // Validate the movie description 
    if(!req.body.description) {
        badRequestResponse.err = "The description of the movie is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };

    // Validate the movie casts
    if(!req.body.casts || !(req.body.casts instanceof Array) || req.body.casts.length <= 0) {
        badRequestResponse.err = "The casts of the movie is not present in the request sent or is not in the correct format";
        return res.status(400).json(badRequestResponse);
    };

    // Validate the movie trailerUrls
    if(!req.body.trailerUrls) {
        badRequestResponse.err = "The trailerUrls of the movie is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };

    // validate the release date of movie
    if(!req.body.releaseDate) {
        badRequestResponse.err = "The releaseDate of the movie is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };

    // vlidate the director of movie
    if(!req.body.director) {
        badRequestResponse.err = "The director of the movie is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };

    next();
    
}

export default  validateMovieCreateRequest ;