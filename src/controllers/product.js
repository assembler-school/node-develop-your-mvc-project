const {Product} = require('../models/Products')

const createProduct = async (req, res) => {

    console.log(req.body)
    const {
      name, 
      description, 
      price, 
      stock,
      images
    } = req.body

    try {
      const product = new Product({
        name: name,
        description: description,
        price: price,
        stock: stock,
        image: [images]
      })

      await product.save()

      res.json({ Create: "succesfull!" })

    } catch (error) {
      throw Error(error)
    }

} 

module.exports = {
  createProduct
}
