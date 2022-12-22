const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema( {
    author_id:{type:ObjectId,
    ref:'newAuthor'},
    name: String,
    headQuarter:String


}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)