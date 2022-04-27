
const mongoose = require('mongoose')
const friendsSchema = mongoose.Schema({
  userID: {type: String, required: true},
  friendID: {type: String, required: true},
  username: {type: String}
}, {collection: 'friends',timestamps: true})
module.exports = friendsSchema