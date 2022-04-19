const mongoose = require('mongoose')
const favoritesSchema = require('./favorites-schema')
const favoritesModel = mongoose.model(
  'FavoritesModel',
  favoritesSchema
)
module.exports = favoritesModel