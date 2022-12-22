const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
    author: String,
    age:Number,
    address:String,
    rating:Number

}, { timestamps: true });

module.exports = mongoose.model('newauthor', authorSchema)
