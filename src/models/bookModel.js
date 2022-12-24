const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    author_id:{type:ObjectId,
    ref:'newauthor'},
    name: String,
    price: Number,
    rating: Number,
    publisher_id:{
        type: ObjectId,
        ref: "Publisher"
    },
    isHardCover: {
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
