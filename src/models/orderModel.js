const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema =  new mongoose.Schema({
    userId:{
      type: objectId,
      ref : "Useer"
      },
    productId:{type: objectId,
    ref:"product"},
           
    amount: Number,
    isFreeAppUser: Boolean,
 //   date : new Date()
  // isFreeAppUser:{type :Boolean, default:false}
 
}, { timestamps: true });

module.exports = mongoose.model('Order',orderSchema) 