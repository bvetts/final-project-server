const mongoose = require('mongoose');
const tuitsSchema = mongoose.Schema({
  comment: String,
  userID: {type: String, required: true},
  uuid: {type: String, required: true},
  title:{type: String, required: true},
  name:{type: String, required: true}
}, {collection: 'comments',timestamps: true});
module.exports = tuitsSchema;