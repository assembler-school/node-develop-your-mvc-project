const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The product must have a title"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "The product must have a price"],
    },
    category: {
      type: String,
      trim: true,
    },
    image: {
      type: [String],
    },
    unitsInStock: {
      type: Number,
      required: true,
    },
    //   rate: {
    //     type: Object,
    //     enum: { rate: Number, count: Number },
    //   },
  },
  { timestamps: true },
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
