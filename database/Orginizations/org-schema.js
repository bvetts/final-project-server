const mongoose = require('mongoose');
const orgSchema = mongoose.Schema({
  description: {type: String, required: true},
  title:{type: String, required: true}

}, {collection: 'org',timestamps: true});
module.exports = orgSchema;