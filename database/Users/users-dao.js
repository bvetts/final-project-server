const userModel = require('./users-model')

const findAllUsers = () => {
  return userModel.find()
}
const findUserById = (id) => {
  return userModel.findById(id)
  // return userModel.find({_id: id})
}
const findUserByEmail = (email) =>
  userModel.findOne({email})

// userModel.findOne({email: email})
// userModel.find({email: email})

const findUserByUsername = (username) =>
  userModel.findOne({username})

const findUserByCredentials = (email, password) =>
  userModel.findOne({email, password})
// userModel.findOne({email: email, password: password})
const createUser = (user) =>
  userModel.create(user)

const updateUser = (id, user) =>
  userModel.updateOne(
    {_id: id},
    { $set: user}

  )

const deleteUser = (_id) =>
  userModel.deleteOne({_id: _id})

module.exports = {
  findUserByEmail, findAllUsers, findUserByCredentials,
  findUserById, createUser, deleteUser, updateUser, findUserByUsername
}

