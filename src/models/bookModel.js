const mongoose2=require("mongoose")
const mybookschema= new mongoose2.Schema({
    
        name:String,
        author_id:{
        type:Number,
        required:true
        },
        price:Number,
        ratings:Number,
    

    })

module.exports=mongoose2.model('myBooks', mybookschema)