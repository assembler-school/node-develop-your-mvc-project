const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const { userRouter } = require("./routes/userRoutes");

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());


app.use('/api/users', userRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-mundo",
  });
});

module.exports = app;
