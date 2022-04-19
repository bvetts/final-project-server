const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
  email: {type: String, unique: false},
  username: {type: String, required: true , unique: true},
  password: {type: String, required: true},
  firstName: String,
  lastName: {type: String},
  phone:{type: String},
  role:{type: String, default:'general'}

}, {collection: 'users'});
module.exports = usersSchema;