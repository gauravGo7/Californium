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
    isDeleted : {
        type : Boolean,
        default : false
    },
    age: Number,
    posts : {
        type : [],
        default : []
    }
}, { timestamps: true });

module.exports = mongoose.model('Userrs', userSchema);