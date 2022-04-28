

const tuitsDao = require('../database/Orginizations/org-dao.js');

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
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
  app.get('/api/org', findAllTuits);
  app.post('/api/org', createNewTuit);
  app.delete('/api/org/:_id', deleteTuit);
}