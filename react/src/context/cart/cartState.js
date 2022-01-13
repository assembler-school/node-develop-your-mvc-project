import React, { useReducer, useContext } from "react";
import cartContext from "./cartContext";
import cartReducer from "./cartReducer"
import axiosClient from "../../config/axios"

import { cart } from "../../types";
import tokenAuth from "../../config/tokenAuth";

const CartState = (props) => {

    const initialState = {
        products: [],
        user: null
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = async ({user, product}) => {

      // Query DB  
      axiosClient.post('/cart/add', {
        user: user._id,
        products: [{_id: product.id}]
      })

      // Change state
      //dispatch()
    }



    return(
        <cartContext.Provider value={{
          products: state.products,
          user: state.user,
          addToCart: addToCart
        }}>
            {props.children}
        </cartContext.Provider>
    )
};

export default CartState;