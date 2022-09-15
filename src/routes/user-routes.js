const Router = require("express").Router;
const UserController = require("../controllers/user-controller");
const AuthController = require("../controllers/auth-controller");

const UserRouter = Router();

UserRouter.get("/users", UserController.getAllUsers);
UserRouter.get("/users/:userId", UserController.getUserById);
UserRouter.post("/users", UserController.createUser);
UserRouter.post("/sign-up", UserController.signUp);
UserRouter.post("/sign-in", AuthController.signIn);
UserRouter.post("/sign-out", AuthController.signOut);
UserRouter.patch("/users/:userId", UserController.updateUser);
UserRouter.delete("/users/:userId", UserController.deleteUser);

module.exports = UserRouter;
