//let tuits = require('./tuits.json');

const tuitsDao = require('../database/comments/comments-dao.js');

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
}

//push username from other side with comment body
const createNewTuit = async (req, res) => {
  const newTuit = req.body;

  const insertedTuit = await tuitsDao.createTuit(newTuit);

  res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
  const tuitId = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitId);
  // tuits = tuits.filter(t => t._id !== tuitId);
  res.sendStatus(200);
}



module.exports = (app) => {
  app.get('/api/comments', findAllTuits);
  app.post('/api/comments', createNewTuit);
  app.delete('/api/comments/:tid', deleteTuit);
}