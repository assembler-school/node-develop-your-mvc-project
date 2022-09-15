const userController = require("../controllers/user-controller");
const productController = require("../controllers/product-controller");
const db = require("../models");

function getSeedUsers() {
  return [
    {
      name: "Gonzalo",
      surname: "Garcia",
      email: "gonzalo@gmail.com",
      password: "123456",
      roles: ["Admin"],
    },
    {
      name: "Marc",
      surname: "Parellada",
      email: "marc@gmail.com",
      password: "654321",
      roles: ["Employee"],
    },
    {
      name: "Alberto",
      surname: "chica",
      email: "alberto@gmail.com",
      password: "111111",
      roles: ["Customer"],
    },
  ];
}

async function getSeedPurchases() {
  const users = await db.User.find({}, { _id: 1 });
  const products = await db.Product.find({}, { _id: 1 });

  const user1 = users[0]["_id"].toString();
  const user2 = users[1]["_id"].toString();

  const productsIds = products.map((product) => {
    return product["_id"].toString();
  });

  return [
    {
      user: user1,
      products: [{ product: productsIds[0], quantity: 5 }, {product: productsIds[1]}],
    },
    {
      user: user2,
      products: [{product: productsIds[0]},{product:  productsIds[1]}, {product: productsIds[2]}],
    },
  ];
}

module.exports = {
  getSeedPurchases,
  getSeedUsers,
};
