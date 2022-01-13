import React, {useState, useContext} from 'react'
import cartContext from '../../context/cart/cartContext'
import userContext from '../../context/users/userContext'

function ProductCard(props) {
  const {_id: id, name, description, price, stock, image} = props.productData

  const [quantity, setQuantity ] = useState(0)

  const contextCart = useContext(cartContext)
  const contextUser = useContext(userContext)

  const sendToCart = (event) => {
    event.preventDefault()

    contextCart.addToCart(
      {
        user: contextUser.user,
        product: {id, name, description, price, stock, image}
      }
    )
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

        <input type="hidden" onChange={getQuantity} className="form-control d-inline itemnumber" value={quantity} aria-label="Username" aria-describedby="addon-wrapping" />

        <button onClick={sendToCart} idproduct={id} className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
