const mongoose = require('mongoose');
const articleSchema = require('./article-schema');
const articleModel = mongoose.model(
  "ArticleModel", articleSchema);
module.exports = articleModel;