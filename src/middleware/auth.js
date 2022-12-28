const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token=req.headers["x-auth-token"];
    
    if(!token){
       res.send({msg: "header missing"})}
    let decodedToken = jwt.verify(token,"functionup-californium-very-very-secret-key")
    if (!decodedToken)  return res.send({ status: false, msg: "token is invalid" })
    req.decodedToken = decodedToken
     next()
}
const authorise = function(req,res,next){
    
        // comapre the logged in user's id and the id in request
        let token = req.headers["x-auth-token"]
        let decodedToken = jwt.verify(token, "functionup-californium-very-very-secret-key")

        // if(!decodedToken) return res.send({status: false, msg:"token is not valid"})

        let userToBeModified = req.params.userId
        //userId for the logged-in user
        let userLoggedIn = decodedToken.userId

        //userId comparision to check if the logged-in user is requesting for their own data
        if (userToBeModified != userLoggedIn) return res.send({
            status: false,
            msg: 'User logged is not allowed to modify the requested users data'
        })
        next()}



module.exports.authenticate=authenticate
module.exports.authorise=authorise