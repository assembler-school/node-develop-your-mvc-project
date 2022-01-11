const Usuario = require("../models/Users")

module.exports = isEmployee = async (req, res, next) => {
    try {
      const user = await Usuario.findById(req.usuario.id);
      if (user.rol === "employee" || user.rol === "admin"){
          next();
          return;
      }
      return res.status(403).json({ message: "Required Employee Role!" });
  
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error });
    }
  };