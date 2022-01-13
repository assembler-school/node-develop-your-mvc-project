const mongoose = require("mongoose");

const config = require("../config/app-config");

function connect() {
  return mongoose.connect(config.db.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connect;