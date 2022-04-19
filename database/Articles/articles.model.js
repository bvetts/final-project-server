const mongoose = require('mongoose')
const articlesSchema = require('./articles-schema')
const articlesModel = mongoose.model(
  'ArticlesModel',
  articlesSchema
)
module.exports = articlesModel