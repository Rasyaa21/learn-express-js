const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        status: {
            statusCode,
            message
        },
        payload: {
            data
        }
    });
}

export default response;
