const Router = require("express").Router;
const apiRouter = Router();
const userRouter = require('./userRoutes')
const productRouter = require('./productRoutes')
const itemRouter = require('./itemRoutes')

apiRouter.use('/users', userRouter);
apiRouter.use('/items', itemRouter);
apiRouter.use('/product', productRouter);

module.exports = apiRouter