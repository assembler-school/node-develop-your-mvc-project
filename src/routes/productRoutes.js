const Router = require("express").Router;
const productRouter = Router();
const { check } = require("express-validator");
const { mainController, validationData } = require('../controllers/mainController')

productRouter.use(check("type", "Add to type of item for example => ['type':'product']").not().isEmpty())
productRouter.use(validationData)

/* Get product details by ID */
//productRouter.get("/:id");

/* Create product */
productRouter.post("/create", mainController);

/* Edit product */
//productRouter.put("/product:id");

/* Delete product */
//productRouter.delete("/product:id");

module.exports = {
  productRouter: productRouter,
};