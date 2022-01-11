const { Router } = require("express");
const router = Router;

const Product = require("../models/Products");

router.get("/items", async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 8;
  const page = parseInt(req.query.page, 10) || 1;
  const products = await Product.paginate({}, { limit, page });
  res.send("Obtaining products.");
  res.json(products);
});

router.post("/items", (req, res) => {
  const newProduct = new Product(req.body);
  const productSaved = newProduct.save();
  res.send("Saving products.");
  res.send(productSaved);
});

module.exports = router;
