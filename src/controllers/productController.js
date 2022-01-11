const {productModel: Product} = require('../models/Products')

const createProduct = async (req, res) => {

  try {
    const product = new Product(req.body)

    await product.save()

    res.json({"response":'Producto creado correctamente'})

  } catch (error) {
    res.send(error)
  }
} 

const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id)
    res.send(product)
  } catch (error) {
    res.send(error)
  }
  
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  try {
    await Product.findByIdAndDelete(id)
    res.json({"response":'Producto eliminado correctamente'})
  } catch (error) {
    res.send(error)
  }
}

const updateProduct = async (req, res) => {

  const {id} = req.params;

  try {
    await Product.findByIdAndUpdate(id, req.body);
    res.json({"response":'Producto actualizado correctamente'})
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
}
