const tuitsModel = require('./comments-model');

const findAllTuits = async () => {
  const tuits = await tuitsModel.find().sort( { 'createdAt': -1 } );
  return tuits;
}
const findAllTuitsByUser = async (userID) => {
  const tuits = await tuitsModel.find({userID});
  return tuits;
}
const findAllTuitsByUUID = async (uuid) => {
  const tuits = await tuitsModel.find({uuid});
  return tuits;
}




const createTuit = async (newTuit) => {
  const insertedTuit = await tuitsModel.create(newTuit);
  return insertedTuit;
}
const deleteTuit = async (id) => {
  const status = await tuitsModel.deleteOne({_id: id});
  return status;
}
const updateTuit = async (id, tuit) => {
  const status = await tuitsModel.updateOne(
    {_id: tid},
    {$set: comment});
  return status;
}
module.exports = {
  findAllTuits, createTuit, deleteTuit, updateTuit, findAllTuitsByUser,findAllTuitsByUUID
}