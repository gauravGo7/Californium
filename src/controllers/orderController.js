const { count } = require("console")
const orderModel = require("../models/orderModel")
const userModel = require("../models/useerModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let data= req.body
    let isFreeAppUser=req.isFreeAppUser
    let uId=data.userId
    let pId=data.productId
    let amount=data.amount 
    if(uId){
        if(!pId){ res.send({msg: "product id is need"})}
    }else  res.send({msg: "usre id is needed"})
//-------------------------------------
let user= await userModel.findById(uId)
    
     if(!user) {   return res.send({msg: "unvalid user id"})}

let product= await productModel.findById(pId)
    
     if(!product) {   return res.send({msg: "unvalid product id"})}

     let balance =user.balance
     let price = product.price
     let cost=price*amount;

     if(isFreeAppUser){
        let update= await orderModel.findByIdAndUpdate(uId,{$set:{amount:0}},{new:true})
        let savedData= await orderModel.create(data)
         res.send({msg: savedData, user:update})}
     

     if(balance>cost){
        let update= await userModel.findByIdAndUpdate(uId,{$set:{balance:(balance-cost)}},{new:true})
        let amount= await orderModel.findByIdAndUpdate(uId,{$set:{amount:price}},{new:true})
         let savedData= await orderModel.create(data)
         res.send({msg: savedData, user:update})}
        
         else{
            return res.send({msg: "insufficent balance"})}
}
  
module.exports.createOrder = createOrder