const Router = require("express").Router;
const apiRouter = Router();
const userRouter = require('./userRoutes')
const productRouter = require('./productRoutes')
const itemRouter = require('./itemRoutes')
const cartRouter = require('./cartRoutes')

apiRouter.use('/users', userRouter);
apiRouter.use('/items', itemRouter);
apiRouter.use('/product', productRouter);
apiRouter.use('/cart', cartRouter);

module.exports = apiRouter