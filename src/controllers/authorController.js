const authorModel= require("../models/authorModel")
const orderModel= require("../models/order")
const productModel= require("../models/productModel")
const userModel= require("../models/userModel1")


// module.exports.createAuthor= createAuthor

const createUser= async function (req, res) {
    let data= req.body

    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}

const createProduct= async function (req, res) {
    let data= req.body

    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}

const createOrder= async function (req, res) {
    let ui= req.body.userId
    let checkui= await userModel.findOne({_id:ui})
    if(!checkui){
        return res.send("Invalid user Id")
    }
    let pi = req.body.productId
    let checkpi= await productModel.findOne({_id:pi})
    if(!checkpi){
        return res.send("Invalid product Id")
    }
    // let currentp=await productModel.findOne({_id:pi})
    let prr = checkpi.price
    let data = req.body
    // console.log(req.isfreeappuser)
    data.isFreeAppUser=isFreeAppUser
    if(data.isFreeAppUser=="true"){
        data.amount=0
        let savedData =await orderModel.create(data)
        return res.send(savedData)
    }
    // let cu= await userModel.findById(ui)
    let ba = checkui.balance
    console.log(ba)
    if(prr>ba){
        return res.send("Insufficient Balance")
    }
    let user1 =await userModel.findOneAndUpdate(
        {_id:ui},
        {$inc:{balance:-prr}},
        { new: true}
    )
    data.amount=prr
    let ordercr = await orderModel.create(data)
    res.send({msg:ordercr,user1})
    
    
}


module.exports.createUser= createUser
module.exports.createProduct= createProduct
module.exports.createOrder= createOrder