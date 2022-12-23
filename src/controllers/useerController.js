const { count } = require("console")
const { nextTick } = require("process")
const useerModel = require("../models/useerModel")

const createUseer= async function (req, res) {
    let data= req.body 
    let savedData= await useerModel.create(data)
    res.send({msg: savedData})
}




module.exports.createUseer = createUseer