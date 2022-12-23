const { type } = require("express/lib/response")
const UserModel= require("../models/userModel")

const basicCode= async function(req, res) {
    
    let contentTypeHeader = req.headers.content-type
    console.log("The headers received in this request are: ", req.headers)
    console.log("The content type header is: ", contentTypeHeader)

    req.headers.month = "December"
    req.batch = "Californium"

    console.log("The headers modified from this request are: ", req.headers)
    // let tokenDataInHeaders= req.headers.token
    // console.log(tokenDataInHeaders)
    res.header("year", "2022")
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")

    console.log("The request object looks like this: ", req)
    res.send({ msg: "This is coming from controller (handler)"})
    
}

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode