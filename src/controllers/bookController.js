const bookmodel1= require("../models/bookmodel")
const bookmodel2= require("../models/Authormodel")


const createmybook= async function  (req, res) {
    let data= req.body
    let savedData= await bookmodel1.create(data)
    res.send({msg: savedData})
}

const createauthor= async function (req, res) {
    let data= req.body
    let savedData= await bookmodel2.create(data)
    res.send({msg: savedData})
}



const bychetan= async function (req, res) {
    let arr= await bookmodel2.find({author_name :"Chetan Bhagat"})
    const[obj]=arr
    console.log(obj)
    let id =obj.author_id  
    // const{id1,id2,an,a,add}=obj
    // console.log(id2)
    let allbooks= await bookmodel1.find({author_id:id})
    res.send({msg: allbooks})
}

const myUpdate= async function (req, res) {
    let obj= await bookmodel1.findOne({name:"Two states"})
    let id = obj.author_id
    console.log(id)
    let objj= await bookmodel2.findOne({author_id:id}).select({author_name:1,_id:0})
    console.log(objj)
    let allBooks= await bookmodel1.findOneAndUpdate( 
        { name :"Two states"} , //condition
        { $set: {price:100} }, //update in data
        { new: true},// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     ).select({price:1,_id:0})
     res.send({ msg:[objj,allBooks]})
    // res.send({msg: allbooks})
}

const diffBetw = async function (req, res) {
    // let b=bookmodel2.find({author_id:x.author_id})
    let allbooks= await bookmodel1.find({ price : { $gte: 50, $lte: 100} })
    let a =[]
    for(i of allbooks){
        let objjj=await bookmodel2.findOne({author_id:(i.author_id)}).select({author_name:1,_id:0})        
         a.push(i)
         a.push(objjj)
    }    
    res.send({msg:a})
}

module.exports.createmybook= createmybook
module.exports.createauthor= createauthor
module.exports.bychetan=bychetan
module.exports.myUpdate=myUpdate
module.exports.diffBetw=diffBetw