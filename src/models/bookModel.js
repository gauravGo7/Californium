const mongoose=require('mongoose')
 
const bookSchema= new mongoose.Schema({
   bookName: {
       type: String,
       required: true
   },
   ISBN: {
       type: String,
       required: true,
       unique: true
   },
   author: String,
   tags: [ String ], //array of strings
   year: Number,
   isPublished: {
       type: Boolean, //Boolean
       default: false
   },
   prices: {
       indianPrice: String,
       europeanPrice: String,
       japanPrice: String
   },
   sales: {
       type: Number,
       default : 0
   },
   completionDate: Date,
   InStock:Boolean,
   pages:Number
 
}, {timestamps: true} )
 
module.exports = mongoose.model( 'Book', bookSchema )
 


//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
