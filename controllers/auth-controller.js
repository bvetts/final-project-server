//const users = [];

const userDao = require('../database/users/users-dao')

const bcrypt = require('bcrypt');
const saltRounds = 10;
/*
const findUserByUsername = async (req, res) => {
  const username = req.params.username
  const user = await userDao.findUserByUsername(username)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
}
*/

const signup = async (req, res) => {
   const newUser = req.body;
   const password = newUser.password;
   const hash = await bcrypt.hash(password, saltRounds);
   newUser.password = hash;
   const existingUser = await userDao
       .findUserByUsername(req.body.username);
   if (existingUser) {
       res.sendStatus(403);
       return;
   } else {
       const insertedUser = await userDao
           .createUser(newUser);
       insertedUser.password = '*****';
       req.session['profile'] = insertedUser;
       res.json(insertedUser);}}


const login = async (req, res) => {
   const user = req.body;
   const username = user.username;
   const password = user.password;
   const existingUser = await userDao.findUserByUsername(username);

   const match = await bcrypt
       .compare(password, existingUser.password);
   if (match) {
       existingUser.password = '*****';
       req.session['profile'] = existingUser;
       res.json(existingUser);
   } else {
       res.sendStatus(403);}}

/*
const profile = (req, res) => {
  res.json(req.session['profile']);
}
*/
const profile = (req, res) => {
  const profile = req.session['profile']
  if(profile) {
    res.json(profile)
  } else {
    res.sendStatus(503)
  }
}

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
}
/*
const findUsers = (req, res) => {
  res.json(users);
}
*/

//these need to be unique across all controllers
module.exports = (app) => {
  app.post('/api/auth/signup', signup);
  app.post('/api/auth/profile', profile);
  app.post('/api/auth/login', login);
  app.post('/api/auth/logout', logout);
  //app.get('/api/users', findUsers);
  //app.get('/api/users/username/:username', findUserByUsername);
}