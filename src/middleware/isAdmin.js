const User = require("../models/Users")

module.exports = isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.usuario.id);
    if (user.rol === "admin"){
        next();
        return;
    }
    return res.status(403).json({ message: "Required Admin Role!" });

  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};