const jwt = require("jsonwebtoken");
const validationMiddleware = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"];

        if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

        let decodedToken = jwt.verify(token, "functionup-lithium-secret-key");

        req.decodedToken = decodedToken
        if (!decodedToken) return res.status(400).send({ status: false, msg: "token is invalid" });
        else {

            next()
        }
    }
    catch(err){
        res.status(500).send({msg:err.message})
    }
}

const authorization = function (req, res, next) {
    try {
       
    if (req.decodedToken.userId !== req.params.userId) return res.status(400).send({ status: false, msg: "you do not have authorization to this " });
    else {
        next()
    }}
    catch(err){
        res.status(500).send({msg:err.message})
    }
}

module.exports.validationMiddleware = validationMiddleware
module.exports.authorization = authorization

