import React, {useState} from 'react'

function ProductCard(props) {
  const {_id: id, name, description, price, stock, image} = props.productData

  const [quantity, setQuantity ] = useState(0)

  const addToCart = (event) => {
    const id = event.target.getAttribute('idproduct')

    // Context del cart

    // Req al server para añadir producto al carrito
  }

  const getQuantity = (event) => {
    const qty = event.target.value
    setQuantity(qty)
  }

  return (
    <div className="card col-md-6">
      {image[0] && (<img className="card-img-top" src={"assets/img/"+image[0].url} alt={image[0].name} />)}
    
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        <p className="card-text">{stock}</p>

        <input type="number" onChange={getQuantity} className="form-control d-inline itemnumber" value={quantity} aria-label="Username" aria-describedby="addon-wrapping" />

        <button onClick={addToCart} idproduct={id} className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
