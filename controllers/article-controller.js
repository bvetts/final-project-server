

const tuitsDao = require('../database/Articles/article-dao.js');

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
}

const findTuitById = async (req, res) => {
  const id = req.params['id']
  const user = await tuitsDao.findTuitById(id)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
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
const findAllTuitsByTopic = async (req, res) => {
   const topic = req.params['topic']
   const tuits = await tuitsDao.findAllTuitsByTopic(topic)
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
  app.get('/api/articles', findAllTuits);
  app.get('/api/articles/:id', findTuitById);
  app.post('/api/articles', createNewTuit);
  app.get('/api/articles/userID/:userID', findAllTuitsByUser);
  app.get('/api/articles/topic/:topic', findAllTuitsByTopic);
  app.get('/api/articles/uuid/:uuid', findAllTuitsByUUID);
  app.delete('/api/articles/:_id', deleteTuit);
}