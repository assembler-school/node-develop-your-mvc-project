const dotenv = require("dotenv").config();
const args = dotenv.parsed 


const CONFIG = {
  db: {
    URL: `mongodb+srv://user_mg_db:${args.MONGO_PASS}@cluster0.4v123.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    PORT: args.MONGO_PORT
  },
  app: {
    PORT: args.EXPRESS_PORT
  }
}

module.exports = CONFIG;