import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserState from "./context/users/userState";

import Login from "./components/usuarios/Login"
import Signin from "./components/usuarios/Signin";
import tokenAuth from "./config/tokenAuth";
import Home from "./components/home";

import Profile from "./components/usuarios/Profile"
import CreateProductForm from "./components/product/createProductForm";
import CartState from "./context/cart/cartState";



const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <CartState>
      <UserState>
        <Router>
          <Routes>
            <Route exact path ="/" element={<Home />} />
            <Route exact path ="/create-product" element={<CreateProductForm />} />
            <Route exact path ="/login" element={<Login />} />
            <Route exact path ="/sign-in" element={<Signin />} />
            <Route exact path ="/product" element={<Login />} />
            <Route exact path ="/checkout" element={<Login />} />
            <Route exact path ="/dashboard" element={<Home />} />
          </Routes>
        </Router>
      </UserState>
    </CartState>
  );
}

export default App;
