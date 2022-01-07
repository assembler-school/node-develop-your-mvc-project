const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String, lowercase: true , required: true},
  email: { type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true, trim: true},
});

module.exports = mongoose.model("Usuario", ClientSchema)