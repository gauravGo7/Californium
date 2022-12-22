const AuthorModel= require("../models/authorModel")
const BooksModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    if(data.author_id){
    let savedData= await BooksModel.create(data)
    res.send({msg: savedData})
    }
    else
    res.send('author_id is not available')
}
const createAuthor= async function (req, res) {
    let data= req.body
    if(data.author_id){
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
    }
    else
    res.send("Entry not allowed, because author_id is not available")
}
const listBooks= async function(req,res){
    let authorCB= await AuthorModel.findOne({author_name:{$eq:"Chetan Bhagat"}}).select({author_id:1,_id:0})
    let booksName= await BooksModel.find(authorCB)
    res.send({msg:booksName})
}
const updated=async function(req,res){
   
    let updateAuthor = await BooksModel.findOneAndUpdate({bookName:"Two states"},{$set:{price:200}},{new:true}).select({author_id:1,_id:0}) 
   
    let authorName = await AuthorModel.find(updateAuthor).select({author_name:1,_id:0})
    let updatedprice= await BooksModel.findOne({bookName:"Two states"}).select({price:1,_id:0})
    res.send({msg:authorName,updatedprice})
}
const booksCost= async function(req,res){
   let findAuthorId= await BooksModel.find({price:{$gte:50, $lte:100}})
   let id = findAuthorId.map(x=>x.author_id)
let authorName = await AuthorModel.find({author_id:id}).select({author_name:1,_id:0})
res.send({msg:authorName})
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.listBooks=listBooks
module.exports.updated=updated
module.exports.booksCost=booksCost