
const { validationResult } = require("express-validator");
const { createProduct } = require('./product');

//const jwt = require("jsonwebtoken");

const mainController = async (req, res) => {
    
    const { type: typeOfModel  } = req.body;
    
    switch(typeOfModel) {
      case 'product':
          createProduct(req, res);
      break;
    
      case 'user': 
      break;

      case 'cart':  
      break;
    
      case 'employee':
      break;
  
      default:
      break;
    }

} 

const validationData = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  next();
}

module.exports = {
  mainController,
  validationData
}
