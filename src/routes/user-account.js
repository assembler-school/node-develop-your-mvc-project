const Router = require("express").Router;
const userRouter = Router();
const { check } = require("express-validator");
const {createUser} = require('../controllers/user-account')

/* Auth login */
//userRouter.use();

/* Login */
//userRouter.post("/login");

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
//userRouter.get("/profile");

module.exports = {
  userRouter: userRouter,
};