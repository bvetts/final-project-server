const friendsDao = require('../database/Friends/friends-dao')

//findAllFavorites, favoritesByUser, favoritesByUUID, createFavorite

const findAllFriends = async (req, res) => {
  const fav = await friendsDao.findAllFriends()
  res.json(fav)
}


const friendsByUser = async (req, res) => {
    const userID = req.params['userID']
    const favs = await friendsDao.friendsByUser(userID)
    if(favs) {
      res.json(favs)
    } else {
      res.sendStatus(404)
    }
}


const deleteFriend = async (req, res) => {
  const id = req.params['id']
  const status = await friendsDao.deleteFriend(id)
  res.json(status)
}

const createFriend = async (req, res) => {
  const info = req.body
  const friendID = info.friendID
  const userID = info.userID
  const existingFav = await friendsDao.findFriendPair( userID,friendID)
  console.log(existingFav)
  if (existingFav==null) {
    const fav = await friendsDao.createFriend(info)
    res.json(fav)

  }
  else{
  res.sendStatus(403);
  return;
  }
}



module.exports = (app) => {
  app.get('/api/friends', findAllFriends);
  app.get('/api/friends/userID/:userID', friendsByUser);
  app.post('/api/friends', createFriend);
  app.delete('/api/friends/:id', deleteFriend);
}