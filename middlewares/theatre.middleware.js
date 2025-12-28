const badRequestResponse = {
    success: false,
    err: "",
    data: {},
    message: "Malformed request | Bad Request"
};

const validateTheatreCreateRequest = async (req, res, next) => {
    // Validate the theatre name
    if(!req.body.name) {
        badRequestResponse.err = "The name of the theatre is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };

    // Validate the theatre city
    if(!req.body.city) {
        badRequestResponse.err = "The city of the theatre is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };

    // Validate the theatre pincode
    if(!req.body.pincode) {
        badRequestResponse.err = "The pincode of the theatre is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };

    // Validate the theatre address
    if(!req.body.address) {
        badRequestResponse.err = "The address of the theatre is not present in the request sent";
        return res.status(400).json(badRequestResponse);
    };

    next();
}

export default validateTheatreCreateRequest;