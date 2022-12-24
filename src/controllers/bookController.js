const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const getpubli=require("../models/publisher")

const createBook= async function (req, res) {
    let book = req.body
    let authorId=book.author
    let publisherId=book.publisherName
    if (authorId) {
        if(!publisherId) 
        res.send({msg : "publisher  id is needed" })
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let updated=await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data:updated})

}

let finalData= async function(req,res){
   let pub=await getpubli.find({publishername:["penguin","harpercollins"]}) 
   let b=pub.map(c=>c._id)
   let d=await bookModel.updateMany({pub:{$in:b}},{$set:{isHardCover:true}})
   let e=await bookModel.updateMany({rating:{$gt:3.5}},{$inc:{price:10}})
   res.send({d,e})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.finalData=finalData
