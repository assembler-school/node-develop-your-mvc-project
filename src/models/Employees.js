const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const { imageSchema } = require('./Products')

const employeesSchema = new Schema({
  id: {type: mongoose.Schema.ObjectId},
  name: { type: String, lowercase: true , required: true},
  email: { type: mongoose.SchemaTypes.Email, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String, required: true},
  avatar: {imageSchema}
});

module.exports = {
  employeesSchema
}