const Router = require("express").Router;
const cartRouter = Router();
const { validationData } = require('../controllers/utilsController');
const { addProductToCart } = require('../controllers/cartController');

cartRouter.use(validationData)

cartRouter.post("/add", addProductToCart);

module.exports = cartRouter;