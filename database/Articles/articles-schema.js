const mongoose = require('mongoose')
const articlesSchema = mongoose.Schema({
  title: String,
  image_url: String,
  uuid: {type: String, unique: true}
}, {collection: 'articles'})
module.exports = articlesSchema