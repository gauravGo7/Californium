const bookModel=require('../models/bookModel')

const createBook=async function(req,res){
    let book= req.body
    let savedbook=await bookModel.create(book)
    res.send({msg:savedbook})
}
const getBookData= async function(req,res){
    let allBooks=await bookModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook=createBook
module.exports.getBookData=getBookData
