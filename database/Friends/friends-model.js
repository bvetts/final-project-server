const mongoose = require('mongoose')
const friendsSchema = require('./friends-schema')
const friendsModel = mongoose.model(
  'FriendsModel',
  friendsSchema
)
module.exports = friendsModel