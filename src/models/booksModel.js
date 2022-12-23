const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
    
    bookName :String,
    author_id :Number,
    price :Number,
    ratings:Number,

}, { timestamps: true });


module.exports = mongoose.model('Authorbook', booksSchema) //users