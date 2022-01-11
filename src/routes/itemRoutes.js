const { Router } = require("express");
const { paginate } = require("../controllers/utilsController");
const itemRouter = Router();

itemRouter.get("", paginate);

module.exports = itemRouter;