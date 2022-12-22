const publisher=require("../models/publisher")
const createPublisher=async function(req,res){
    let publi=req.body
    let savedData= await publisher.create(publi)
    res.send({data:savedData})
}
const getPublisher=async function(req,res){
    let getPubli= await publisher.find()
    res.send({data:getPubli})
}

const getPublisherWithAuthorDetails=async function(req,res){
    let specificPub=await publisher.find().populate('author_id')
    res.send({data:specificPub})
}
module.exports.createPublisher=createPublisher
module.exports.getPublisher=getPublisher
module.exports.getPublisherWithAuthorDetails=getPublisherWithAuthorDetails