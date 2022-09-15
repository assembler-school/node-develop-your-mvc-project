const db = require("../models");

async function signIn(req, res, next) {
  try {
    const { email } = req.user;

    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.status(201).send({
        success: true,
        message: "User Found",
        user: user,
      });
    }

    return res.status(400).send({
      success: false,
      message: "Not found",
    });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
}

async function signOut(req, res) {
  req.signOut();

  res.status(200).send(
    generateResponse({
      data: "OK",
    }),
  );
}

module.exports = {
  signIn,
  signOut,
};
