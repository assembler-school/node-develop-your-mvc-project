const {productModel: Product} = require('../models/Products')


const createProduct = (req, res) => {

  const productImage = req.files.image
  
  if (!productImage) return res.status(500).send({ message : 'Missing file input' })  

  productImage.mv(`public/assets/img/${productImage.name}`, err => {
    
    if (err) return res.status(500).send({ message : err })

    const product = new Product({
      ...req.body,
      image: [{
        title: `${req.body.name} ${req.body.description}`, 
        url: productImage.name
      }] 
    })
    product.save()
    
    return res.status(200).send({ message : 'Producto creado correctamente' })
  })
    
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
