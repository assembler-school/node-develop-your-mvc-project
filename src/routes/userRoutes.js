const Router = require("express").Router;
const userRouter = Router();
const { check } = require("express-validator");
const {createUser, verifyLogin, authUser, modifyUser} = require('../controllers/userController')
const auth = require("../middleware/auth");

/* Auth login */
//userRouter.use();

/* Login */
userRouter.post("/login", 
  [check("email", "Agrega un email válido").isEmail()],
  [check('password', "La passwrod debe tener 6 caracteres").isLength({min: 6})],
  verifyLogin
);

/* Create account */
userRouter.post("/sign-up", 
  [check("name", "El nombre es obligatorio").not().isEmpty()],
  [check("email", "Agrega un email válido").isEmail()],
  [check('password', "La passwrod debe tener 6 caracteres").isLength({min: 6})],
  createUser
);

/* Reset Password */
//userRouter.get("/reset-pass");

/* Profile details */

//UserAuth
userRouter.get("/profile", auth, authUser)

//Modify UserDates
userRouter.put("/profile", auth,   
[check("name", "El nombre es obligatorio").not().isEmpty()],
[check("email", "Agrega un email válido").isEmail()],
[check('password', "La passwrod debe tener 6 caracteres").isLength({min: 6})],
modifyUser);

module.exports = {
  userRouter: userRouter,
};