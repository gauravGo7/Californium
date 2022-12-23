const mongoose3=require("mongoose")
const authorschema= new mongoose3.Schema({
    
    author_id:{
    type:Number,
    required:true
    },
    author_name:String,
    age:Number,
    address:String

    

    })

module.exports=mongoose3.model('Author', authorschema)