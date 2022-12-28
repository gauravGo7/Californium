const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    posts: {type: [], deafult: []},
    isDeleted:false
}, { timestamps: true });

module.exports = mongoose.model('Userr', userSchema)
