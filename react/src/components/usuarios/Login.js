import React, {useContext, useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../../context/users/userContext';

const Login = (props) => {
//To redirect User
const history = useNavigate();

//Extraer valores del context
const userContext = useContext(UserContext);
const { auth, loginUser } = userContext;

useEffect(() => {
    if(auth){
      history("/dashboard")
    }
  }, [auth, history])

//State to log in
const [user, setUser] = useState({
    email: "",
    password: ""
})

//Destructuring state
const {email, password} = user;


const onChangeInput = (e) => {
   setUser({
     ...user,
     [e.target.name]: e.target.value,
   });
 };

const onSubmitForm = (e)=>{
    e.preventDefault();

    //Validation 
    if (email.trim() === "" || password.trim() === "") {
        return 
      }
    
    //Funcion del action del context
    loginUser({email, password})
}

    return (
        <>
            <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Login Form</h2>
                    <div className="text-center mb-5 text-dark">Made with bootstrap</div>
                    <div className="card my-5">

                      <form onSubmit={onSubmitForm} className="card-body cardbody-color p-lg-5">

                        <div className="text-center">
                          <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                            width="200px" alt="profile" />
                        </div>

                        <div className="mb-3">
                          <input onChange={onChangeInput} type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp"
                            placeholder="User Name" value={email} />
                        </div>
                        <div className="mb-3">
                          <input onChange={onChangeInput} type="password" className="form-control" name="password" id="password" placeholder="Password" value={password} />
                        </div>
                        <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
                        <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                          Registered? <Link to={"/sign-in"}><button className="text-dark fw-bold"> Create an
                            Account</button></Link>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
        </>
    );
};

export default Login;
