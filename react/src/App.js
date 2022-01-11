import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserState from "./context/users/userState";

import Login from "./components/usuarios/Login"
import Signin from "./components/usuarios/Signin";
import tokenAuth from "./config/tokenAuth";


const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <UserState>
      <Router>
        <Routes>
          <Route exact path ="/" element={<Login />} />
          <Route exact path ="/sign-in" element={<Signin />} />
        </Routes>
      </Router>
    </UserState>
  );
}

export default App;
