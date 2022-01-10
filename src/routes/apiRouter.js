const Router = require("express").Router;
const apiRouter = Router();
const {userRouter} = require('./userRoutes')
const {productRouter} = require('./productRoutes')

apiRouter.use('/users', userRouter);

apiRouter.use('/product', productRouter);

module.exports = apiRouter