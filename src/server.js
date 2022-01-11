const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const apiRouter  = require("./routes/apiRouter");
const cors = require("cors");
const { createAdmin} = require("./libs/initialSetup");

const app = express();
createAdmin();

app.use(json());
app.use(cors());
app.use(express.static('public'));

app.use(morgan("dev"));

app.use(helmet());

app.use('/api', apiRouter);


module.exports = app;