const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { UserRouter, ProductRouter, PurchaseRouter } = require("./routes");
const { errorMiddleware, authMiddleware } = require("./middlewares");
const config = require("./config/app-config");

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

//app.use(authMiddleware);

app.use("/products", ProductRouter);
app.use("/", authMiddleware, UserRouter);
app.use("/purchases", PurchaseRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-mundo",
  });
});

app.use(errorMiddleware);

module.exports = app;
