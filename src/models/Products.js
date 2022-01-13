const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pagination = require("mongoose-paginate-v2");

const imageSchema = new Schema({
  title: { type: String },
  url: { type: String },
  alt: { type: String },
});

const productSchema = new Schema({
  id: { type: mongoose.Schema.ObjectId },
  name: { type: String, lowercase: true, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: [imageSchema],
});

productSchema.plugin(pagination);

module.exports = {
  productModel: mongoose.model("Product", productSchema),
  imageSchema,
};
