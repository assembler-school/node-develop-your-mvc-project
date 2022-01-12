const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cart = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    unique: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

module.exports = {
  Cart: mongoose.model('Cart', cart)
}