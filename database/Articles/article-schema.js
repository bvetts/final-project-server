const mongoose = require('mongoose');
const articleSchema = mongoose.Schema({
  content: {type: String, required: true},
  userID: {type: String, required: true},
  title:{type: String, required: true},
  author:{type: String, required: true},
  org:String,
  topic:String
}, {collection: 'articles',timestamps: true});
module.exports = articleSchema;