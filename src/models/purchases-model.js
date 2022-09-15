const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: [true, "There must be a user for each purchase"],
    },
    products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          required: [true, "Please attach the products of the purchase"],
          ref: "product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true },
);

const PurchaseModel = mongoose.model("purchase", PurchaseSchema);

module.exports = PurchaseModel;
