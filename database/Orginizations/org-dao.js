const articleModel = require('./org-model');

const findAllTuits = async () => {
  const tuits = await articleModel.find().sort( { 'createdAt': -1 } );
  return tuits;
}
const findAllTuitsByUser = async (userID) => {
  const tuits = await articleModel.find({userID});
  return tuits;
}
const findAllTuitsByUUID = async (uuid) => {
  const tuits = await articleModel.find({uuid});
  return tuits;
}
const findTuitById = (id) => {
  return articleModel.findById(id)
  // return userModel.find({_id: id})
}

const findAllTuitsByTopic = async (topic) => {
  const tuits = await articleModel.find({topic});
  return tuits;
}

const createTuit = async (newTuit) => {
  const insertedTuit = await articleModel.create(newTuit);
  return insertedTuit;
}
const deleteTuit = async (id) => {
  const status = await articleModel.deleteOne({_id: id});
  return status;
}
const updateTuit = async (id, tuit) => {
  const status = await articleModel.updateOne(
    {_id: tid},
    {$set: content});
  return status;
}
module.exports = {
  findAllTuits, createTuit, deleteTuit, updateTuit, findAllTuitsByUser,findAllTuitsByUUID, findTuitById,findAllTuitsByTopic
}