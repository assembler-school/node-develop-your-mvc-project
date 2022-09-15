const Router = require("express").Router;

const ProductController = require("../controllers/product-controller");

const ProductRouter = Router();

ProductRouter.get("/", ProductController.getAllProducts);

ProductRouter.get("/:productId", ProductController.getSingleProduct);

ProductRouter.get("/category/:category", ProductController.getCategory);

ProductRouter.post("/", ProductController.createProduct);

ProductRouter.patch("/:productId", ProductController.updateProduct);

ProductRouter.delete("/:productId", ProductController.deleteProduct);

module.exports = ProductRouter;
