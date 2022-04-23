//let tuits = require('./tuits.json');

const tuitsDao = require('../database/comments/comments-dao.js');

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
}
const findAllTuitsByUser = async (req, res) => {
   const userID = req.params['userID']
   const tuits = await tuitsDao.findAllTuitsByUser(userID)
   if(tuits ) {
     res.json(tuits )
   } else {
     res.sendStatus(404)
   }
}

const findAllTuitsByUUID = async (req, res) => {
    const uuid = req.params['uuid']
    const tuits = await tuitsDao.findAllTuitsByUUID(uuid)
    if(tuits ) {
      res.json(tuits )
    } else {
      res.sendStatus(404)
    }
 }


const createNewTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}


const deleteTuit = async (req, res) => {
  const id = req.params['_id']
  const status = await tuitsDao.deleteTuit(id);
  // tuits = tuits.filter(t => t._id !== tuitId);
  res.json(status);
}

module.exports = (app) => {
  app.get('/api/comments', findAllTuits);
  app.post('/api/comments', createNewTuit);
  app.get('/api/comments/userID/:userID', findAllTuitsByUser);
  app.get('/api/comments/uuid/:uuid', findAllTuitsByUUID);
  app.delete('/api/comments/:_id', deleteTuit);
}