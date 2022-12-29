const UserModel= require("../models/userModel")




const basicCode= async function(req, res, next) {
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

const createUser= async function (req, res) {
    // Remember that inside request object we already know multiple attributes
    // Examples - body(req.body), query(req.query), params(req.params)
    let body = req.body
    let headers = req.headers
    console.log("The body attribute of this request is: ", body)
    console.log("The headers attribute of thisd request is: ",headers)
    let hostValue = headers.host
    console.log("The host header of this request is: ",hostValue)
    // Bracket notation is safe to use when dealing with keys that have a hyphen
    let contentType = headers["content-type"]
    console.log("The content type header of this request is: ",contentType)
    
    //Set a header in request
    req.headers["year"] = 2022
    console.log("The updated headers attribute of this request is: ",req.headers)
    res.setHeader("message","Hi there!")
    res.send({msg: "Hi"})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const dummyOne = function (req, res) {
    if (req.wantsJson) res.send({msg: "ok"})
    else res.send("ok")
}

const dummyTwo = function (req, res) {
    if (req.wantsJson) res.send({msg: "another example response"})
    else res.send("another example response")
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.dummyOne = dummyOne
module.exports.dummyTwo = dummyTwo