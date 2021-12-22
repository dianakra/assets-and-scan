module.exports.globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}

module.exports.catchAsync=func=>{
    return (req,res,next)=>{
        func(req,res,next).catch(next)
    }
}