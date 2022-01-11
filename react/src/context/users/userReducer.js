import { LOGIN_OK, REGISTER_OK, OBTAIN_AUTH_USER } from "../../types";

const userReducer = (state, action)=>{
    switch (action.type) {
        case REGISTER_OK:
        case LOGIN_OK:
            localStorage.setItem("token", action.payload.token);
            return {
              ...state,
              auth: true
            };
        
        case OBTAIN_AUTH_USER:
            return{
                ...state,
                auth: true,
                user: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer