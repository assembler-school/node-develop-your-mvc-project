import { cart } from "../../types";

const cartReducer = (state, action)=>{
    switch (action.type) {
        case cart.ADD_PRODUCT:
          break
          
        case cart.CHANGE_QUANTITY:
          break

        default:
            return state;
    }
}

export default cartReducer