const {Cart} = require("../models/Cart")

const addProductToCart = async (req, res) => {

  // Get User ID
  const userId = req.body.user
  const product = req.body.products[0]
  
  // Find user Cart
  const cart = await Cart.findOne({user: userId})

  if (cart) {
    const cartProducts = cart.products
    cart.products = [...cartProducts, product]
    cart.save()
    return res.json('Updated cart in DB')
  }

  const newCart = new Cart({
    user: userId,
    products: [product]
  })
  newCart.save()
  return res.json('Created cart in DB')

}

module.exports = {
  addProductToCart
}