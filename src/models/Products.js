const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: {type: String},
  url: {type: String},
  alt: {type: String}
})

const productSchema = new Schema({
  name: { type: String, lowercase: true , required: true},
  description : {type: String},
  price: {type: Number, required: true},
  stock: {type: Number, required: true},
  image: [imageSchema] 
});



module.exports = {
  Product: mongoose.model("Product", productSchema),
  imageSchema
}