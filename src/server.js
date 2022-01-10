const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const { userRouter } = require("./routes/user-account");
const { productRouter } = require("./routes/product");

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());


app.use('/user-account', userRouter);
app.use('/product', productRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-mundo",
  });
});

module.exports = app;