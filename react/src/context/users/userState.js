import React, { useReducer } from "react";
import userContext from "./userContext";
import userReducer from "./userReducer"

import axiosClient from "../../config/axios"

import { LOGIN_OK, OBTAIN_AUTH_USER, REGISTER_OK, MODIFY_USER } from "../../types";
import tokenAuth from "../../config/tokenAuth";

const UserState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        user: null,
        auth: null
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    //FUNCTIONS
    const loginUser = async (formData)=>{
        try {
            const returnToken = await axiosClient.post("users/login", formData);

            dispatch({
                type: LOGIN_OK,
                payload: returnToken.data,
              });

              authUser();
            
        } catch (error) {
            console.log(error)
        }
    }

    const registerUser = async (formData)=>{
        try {
            const dataRegister = await axiosClient.post("users/sign-up", formData)

            dispatch({
                type: REGISTER_OK,
                payload: dataRegister.data,
              });
            
              authUser();
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const authUser = async()=>{
        const token = localStorage.getItem("token");
        if(token){
            tokenAuth(token);
        }

        try {
            const user = await axiosClient.get("users/profile");
            dispatch({
                type: OBTAIN_AUTH_USER,
                payload: user.data.usuario
            })
        } catch (error) {
            console.log(error)
            }
    }

    const modyfyUser = async (formData)=>{
        try {
            const dataRegister = await axiosClient.post("users/profile", formData)

            dispatch({
                type: MODIFY_USER,
                payload: dataRegister.data,
              });
            
              authUser();
            
        } catch (error) {
            console.log(error)
            
        }
    }



    return(
        <userContext.Provider
            value={{
                token: state.token,
                user: state.user,
                auth: state.auth,
                loginUser,
                registerUser,
                authUser,
                modyfyUser
            }}
        >
            {props.children}
        </userContext.Provider>
    )
};

export default UserState;