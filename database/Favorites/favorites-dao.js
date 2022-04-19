const favoritesModel = require('./favorites-model')

const createFavorite = async (info) =>{
   const fav = await favoritesModel.create(info);
     return fav;
}


const findAllFavorites = async () => {
    const fav= await favoritesModel.find();
    return fav;

}


const favoritesByUser = async (username) => {
  const articles = favoritesModel.find({username});
  return articles;
}


const favoritesByUUID = async (uuid) => {
  const articles = favoritesModel.find({uuid});
  return articles;
}
const deleteFavorite = (id) =>
  favoritesModel.deleteOne({_id: id})

module.exports = {
  findAllFavorites, favoritesByUser, favoritesByUUID, createFavorite, deleteFavorite
  }