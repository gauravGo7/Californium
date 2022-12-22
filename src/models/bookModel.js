const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    author_id:{type:ObjectId,
    ref:'newAuthor'},
    name: String,
    price: Number,
    rating: Number


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
