const Router = require("express").Router;
const productRouter = Router();
const { validationData } = require('../controllers/utilsController');
const { createProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/productController');

productRouter.use(validationData)

productRouter.get("/:id", getProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.put('/:id', updateProduct)
productRouter.post("/create", createProduct);

module.exports = {
  productRouter: productRouter,
};