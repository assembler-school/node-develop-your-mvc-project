const db = require("../models");

async function getAllUsers(req, res, next) {
  try {
    const dbRes = await db.User.find({}, { __v: 0 });

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const { userId } = req.params;

    const dbRes = await db.User.findOne(
      {
        _id: userId,
      },
      { __v: 0 },
    );

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (error) {
    //console.log(error);
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const newUser = req.body;
    const dbRes = await db.User.create(newUser);

    res.status(204).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    const { newData } = req.body;
    const { userId } = req.params;

    const dbRes = await db.User.findOneAndUpdate({ _id: userId }, newData, {
      new: true,
      runValidators: true,
    });

    res.status(201).send({
      success: true,
      message: "Product updated",
      data: dbRes,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const { userId } = req.params;

    const dbRes = await db.User.findOneAndDelete({
      _id: userId,
    });

    res.status(200).send({
      success: true,
      message: "Product removed",
      data: dbRes,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function signUp(req, res, next) {
  try {
    const { email } = req.user;
    const { firstName, lastName, firebaseId } = req.body;

    const user = await db.User.findOne({ email: email });

    if (user) return res.status(200);

    const newUser = await db.User.create({
      firebaseId: firebaseId,
      name: firstName,
      surname: lastName,
      email: email,
    });
    res.status(201).send({
      success: true,
      message: "New user registered",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  signUp,
};
