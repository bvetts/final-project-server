const friendsModel = require('./friends-model')

const createFriend = async (info) =>{
   const fav = await friendsModel.create(info);
     return fav;
}


const findAllFriends = async () => {
    const fav= await friendsModel.find();
    return fav;

}
const findFriendPair = (userID, friendID) =>{
 pair = friendsModel.findOne({userID, friendID})
 return pair
 }


const friendsByUser = async (userID) => {
  const articles = friendsModel.find({userID});
  return articles;
}


const deleteFriend = (id) =>
  friendsModel.deleteOne({_id: id})

module.exports = {
  findAllFriends, friendsByUser, createFriend, deleteFriend,findFriendPair
  }