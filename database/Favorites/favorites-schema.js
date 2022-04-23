//this is a mnay to many look up table???
//not 100% sure on the way to do this

const mongoose = require('mongoose')
const favoritesSchema = mongoose.Schema({
  userID: {type: String, required: true},
  uuid: {type: String, required: true},
  title: {type: String, required: true}
}, {collection: 'favorites'})
module.exports = favoritesSchema