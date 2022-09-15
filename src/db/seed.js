const axios = require("axios");
const db = require("../models");
const { getSeedUsers, getSeedPurchases } = require("./seed-data");

async function seedData() {
  try {
    const req = await axios.get("https://fakestoreapi.com/products");
    req.data.forEach((element) => {
      delete element["id"];
      element.unitsInStock = 10;
      element.image = [element.image, element.image];
    });
    await db.Product.deleteMany({});
    await db.Product.insertMany([...req.data]);
  } catch (err) {
    console.log(err.message);
  }
}

async function seedUsers() {
  try {
    const users = getSeedUsers();
    await db.User.deleteMany({});
    await db.User.create([...users]);
  } catch (error) {
    console.log(error);
  }
}

async function seedPurchases() {
  try {
    const purchases = await getSeedPurchases();
    await db.Purchase.deleteMany({});
    await db.Purchase.create([...purchases]);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { seedData, seedUsers, seedPurchases };
