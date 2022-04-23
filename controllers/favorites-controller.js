const favoritesDao = require('../database/Favorites/favorites-dao')

//findAllFavorites, favoritesByUser, favoritesByUUID, createFavorite

const findAllFavorites = async (req, res) => {
  const fav = await favoritesDao.findAllFavorites()
  res.json(fav)
}
const favoritesByUUID = async (req, res) => {
   const uuid = req.params['uuid']
   const favs = await favoritesDao.favoritesByUUID(uuid)
   if(favs) {
     res.json(favs)
   } else {
     res.sendStatus(404)
   }
 }
const favoritesByUser = async (req, res) => {
    const userID = req.params['userID']
    const favs = await favoritesDao.favoritesByUser(userID)

    if(favs) {
      res.json(favs)

    } else {
      res.sendStatus(404)
    }
}
const favoritesPair= async (req, res) => {
   const uuid = req.params['uuid']
   const userID = req.params['userID']

   const favs = await favoritesDao.findFavoritesPair(userID, uuid)
   if(favs) {
     res.json(favs)
   } else {
     res.sendStatus(404)
   }
 }


const deleteFavorite = async (req, res) => {
  const id = req.params['id']
  const status = await favoritesDao.deleteFavorite(id)
  res.json(status)
}

const createFavorite = async (req, res) => {
  const info = req.body
  const fav = await favoritesDao.createFavorite(info)
  res.json(fav)
}

module.exports = (app) => {
  app.get('/api/favorites', findAllFavorites);
  //app.get('/api/favorites/_id/:_id', favoritesPair);
  app.get('/api/favorites/uuid/:uuid', favoritesByUUID);
  app.get('/api/favorites/userID/:userID', favoritesByUser);
  app.post('/api/favorites', createFavorite);
  app.delete('/api/favorites/:id', deleteFavorite);
}