const ProductModel = require("./product-model");
const UserModel = require("./user-model");
const PurchaseModel = require("./purchases-model");

module.exports = {
  Product: ProductModel,
  Purchase: PurchaseModel,
  User: UserModel
};
