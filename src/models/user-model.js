const mongoose = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //required: [true,"The name must have a name"],
      trim: true,
    },
    surname: {
      type: String,
      //required: [true,"The surname must have a surname"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The user must have email"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    address: {
      type: String,
      trim: true,
    },
    paymentMethod: {
      type: String,
      trim: true,
    },
    creditCard: {
      type: String,
      true: true,
    },
    roles: {
      type: [String],
      enum: ["Customer", "Employee", "Admin"],
      required: true,
      default: "Customer",
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
