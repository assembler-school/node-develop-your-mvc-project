const app = require("./server");
const config  = require("./config/app-config");
const connect = require("./db/connect");

connect()
.then(async function onServerInit() {
  /* Connection success */
  console.log('DB connection running')
  app.listen(config.app.PORT, () => {
    console.log(`Server listening on ${config.app.PORT}`);
  });
})
.catch(err => {
  console.log(err);
  throw Error(err);
});