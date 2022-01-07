const app = require("./server");
const config  = require("./config/app-config");
const connect = require("./db/connect");


app.listen(config.app.PORT, () => {
  console.log(`Server listening on ${config.app.PORT}`);
});

connect().then(async function onServerInit() {

  /*app.listen(config.db.PORT, () => {
    console.log(`Server running at http://localhost:${config.db.PORT}`);
  });*/
});