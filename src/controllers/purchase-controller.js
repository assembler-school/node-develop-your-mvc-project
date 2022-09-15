const db = require("../models");

async function getAllPurchases(req, res, next) {
  try {
    const dbRes = await db.Purchase.find({}).populate(
      "products.product",
      "title",
    );

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function getSinglePurchase(req, res, next) {
  try {
    const { purchaseId } = req.params;

    const dbRes = await db.Purchase.find({
      _id: purchaseId,
    }).populate("products.product", "title");

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function createPurchase(req, res, next) {
  try {
    const newPurchase = req.body;
    console.log(newPurchase);

    dbRes = await db.Purchase.create(newPurchase);

    res.status(201).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function updatePurchase(req, res, next) {
  try {
    const { purchaseId } = req.params;

    const newData = req.body;

    const dbRes = await db.Purchase.findOneAndUpdate(
      { _id: purchaseId },
      newData,
      {
        new: true,
      },
    );

    res.status(205).send({
      success: true,
      message: "The purchase has been updated",
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function deletePurchase(req, res, next) {
  try {
    const { purchaseId } = req.params;

    const dbRes = await db.Purchase.findOneAndDelete({
      _id: purchaseId,
    });
    res.status(200).send({
      success: true,
      message: "The purchase has been deleted",
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllPurchases,
  getSinglePurchase,
  createPurchase,
  updatePurchase,
  deletePurchase,
};
