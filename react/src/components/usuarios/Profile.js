import React, {useContext, useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../../context/users/userContext';


const Signin = () => {
//To redirect User
const history = useNavigate();

//Extraer valores del context
const userContext = useContext(UserContext);
const { auth, user, registerUser, authUser } = userContext;

//Is already auth
useEffect(() => {
  authUser();
}, [])


console.log(user)
//State to sign up




const [newUser, setNewUser] = useState(
  {
  name: "",
  email: "",
  password: "",
  passwordConfirm: ""
})

//Destructuring state
const {name, email, password, passwordConfirm} = newUser;

//When input change
const onChangeInput = (e)=>{
  setNewUser({
    ...newUser,
    [e.target.name]: e.target.value
  })
}

//When user want to be registered
const onSubmitForm = (e)=>{
  //For not reload page
  e.preventDefault();

  //Validate not to empty inputs
  if(name.trim() === "" || email.trim() === "" || password.trim() === "" || passwordConfirm.trim() === ""){
    return
  }

  //Password min 4 length
  if(password.trim().length < 4){
    return
  }

  //Both password are similar
  if(password.trim() !== passwordConfirm.trim()){
    return
  }

  //Register User
  registerUser({name, email, password})

}

    return (
        <>
            <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <h2 className="text-center text-dark mt-5">Sign In Form</h2>
                    <div className="text-center mb-5 text-dark">Made with bootstrap</div>
                    <div className="card my-5">

                      <form onSubmit={onSubmitForm} className="card-body cardbody-color p-lg-5">

                        <div className="text-center">
                          <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                            width="200px" alt="profile" />
                        </div>

                        <div className="mb-3">
                          <input onChange={onChangeInput} type="text" className="form-control" name="name" aria-describedby="emailHelp"
                            placeholder="Name" />
                        </div>
                        <div className="mb-3">
                          <input onChange={onChangeInput} type="text" className="form-control" name="email" aria-describedby="emailHelp"
                            placeholder="Email" />
                        </div>

                        <div className="mb-3">
                          <input onChange={onChangeInput} type="password" className="form-control" name="password" placeholder="Password" />
                        </div>
                        <div className="mb-3">
                          <input onChange={onChangeInput} type="password" className="form-control" name="passwordConfirm" placeholder="Confirm Password" />
                        </div>
                        <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Sign In</button></div>
                        <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already
                          Registered? <Link to={"/"}><button className="text-dark fw-bold"> Log in</button></Link>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
        </>
    );
};

export default Signin;
