const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const odersSchema = new mongoose.Schema( {
    userId: ObjectId,
	productId: ObjectId,
	amount:Number,
	isFreeAppUser:Boolean, 
	date:{
    type:Date,
    default:Date.now
    },
    

}, { timestamps: true });

module.exports = mongoose.model('Oders', odersSchema)