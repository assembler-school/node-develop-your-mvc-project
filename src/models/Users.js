const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  id: {type: mongoose.Schema.ObjectId},
  name: { type: String, lowercase: true , required: true},
  email: { type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true, trim: true},
});

module.exports = {
  clientSchema
}