
const { validationResult } = require("express-validator");
const { productModel: Product } = require("../models/Products");

const validationData = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  next();
}


const paginate = async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const page = parseInt(req.query.page, 10) || 1;

  try {
    const products = await Product.paginate({}, { limit, page });
    res.json(products);
  } catch (error) {
    res.json(error);
  }

}


module.exports = {
  validationData,
  paginate
}
