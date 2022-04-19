const mongoose = require('mongoose');
const tuitsSchema = mongoose.Schema({
  comment: String,
  username: {type: String, required: true}
}, {collection: 'comments'});
module.exports = tuitsSchema;