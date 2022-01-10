const Usuario = require("../models/Users")

const bcrypt = require("bcrypt")


const createAdmin = async () => {
  // check for an existing admin user
  const user = await Usuario.findOne({ email: "admin@localhost.com" });

  if (!user) {
    // create a new admin user
    await Usuario.create({
      name: "admin",
      email: "admin@localhost.com",
      password: await bcrypt.hash("admin", 10),
      rol: "admin",
    });
    console.log('Admin User Created!')
  }
};


module.exports = {
    createAdmin,
  }