const mongoose = require('mongoose');
const { productSchema } = require('./Products');
const Schema = mongoose.Schema;

const cart = new Schema({
  id: {type: mongoose.Schema.ObjectId},
  user: {type: Number},
  products: [productSchema]
});

module.exports = {
  cart
}