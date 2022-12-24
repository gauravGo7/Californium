const mongoose = require('mongoose');


const publisherSchema = new mongoose.Schema( {
    
    publishername: String,
    headQuarter:String


}, { timestamps: true });

module.exports = mongoose.model('Publisher', publisherSchema)