const jwt = require('jsonwebtoken');
const {ErrorResponse} = require('./response');


const createJWT = (payload) => {
    //const secrete = process.env.SECRETE_KEY;
    const secrete = 'shah12345678';
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 365),
        data: payload
    }, secrete);
}

const decodeJWT = (token) => {
    //const secrete = process.env.SECRETE_KEY;
    const secrete = 'shah12345678';
    return jwt.verify(token, secrete);
}

const decodeJWTMiddleWare = (req, res, next) => {
    try {
        if ('token' in req.headers) {
            console.log("there are token headers")
            const token = req.headers['token']
            const user = decodeJWT(token).data;
            if (!user) {
                return res.status(200).json({
                    statusCode: 400,
                    message: 'Token is expired'
                })
            } else {
                req.body.userData = user;
                next()
            }

        } else
            res.status(200).json({
                statusCode: 400,
                message: 'Token header not found'
            })
    } catch (err) {
        res.status(400).json({
            statusCode: 400,
            message: 'Token expired'
        })
    }

}

const exceptionHandlingMiddleware = fn =>(req, res, next) => {
    res.statusCode=503;
    Promise.resolve()
    .then(() => fn(req, res, next))
    .catch((error) => {
        console.debug(error.stack);
        return ErrorResponse(res)({ message: 'Unhandled exception', response: { error: error.stack } })
    });

};

const authorizationMiddleWare = (req, res, next) => {
    console.debug("hello url=====" + req.url)
    next();
};


module.exports = {
    createJWT,
    decodeJWT,
    decodeJWTMiddleWare,
    exceptionHandlingMiddleware, 
    authorizationMiddleWare
}
