const Router = require("express").Router;
const PurchaseController = require("../controllers/purchase-controller");

const PurchaseRouter = Router();

PurchaseRouter.get("/", PurchaseController.getAllPurchases);

PurchaseRouter.get("/:purchaseId", PurchaseController.getSinglePurchase);

PurchaseRouter.post("/", PurchaseController.createPurchase);

PurchaseRouter.patch("/:purchaseId", PurchaseController.updatePurchase);

PurchaseRouter.delete("/:purchaseId", PurchaseController.deletePurchase);

module.exports = PurchaseRouter;
