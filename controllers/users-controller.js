const userDao = require('../database/users/users-dao')

//const bcrypt = require('bcrypt');
//const saltRounds = 10;


const findAllUsers = async (req, res) => {
  const users = await userDao.findAllUsers()
  res.json(users)
}
const findUserById = async (req, res) => {
  const userId = req.params['id']
  const user = await userDao.findUserById(userId)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
}
const findUserByEmail = async (req, res) => {
  const email = req.params.email
  const user = await userDao.findUserByEmail(email)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
}
const findUserByUsername = async (req, res) => {
  const username = req.params.username
  const user = await userDao.findUserByUsername(username)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
}


const findUserByCredentials = async (req, res) => {
  const credentials = req.body
  const {username, password} = credentials
  const user = await userDao.findUserByCredentials(
    username, password
  )
  if(user) {
    res.sendStatus(200)
  } else {
    res.sendStatus(403)
  }
}

const createUser = async (req, res) => {
  const user = req.body
  const insertedUser = await userDao.createUser(user)
  res.json(insertedUser)
}
const updateUser = async (req, res) => {
  const user = req.body
  const userId = req.params['id']
  const status = await userDao.updateUser(userId, user)
  res.json(status)
}
const deleteUser = async (req, res) => {
  const userId = req.params['id']
  const status = await userDao.deleteUser(userId)
  res.json(status)
}


//stuff from auth controller



const signup = async (req, res) => {
   const newUser = req.body;
   //const password = newUser.password;
   //const hash = await bcrypt.hash(password, saltRounds);
  // newUser.password = hash;
   const existingUser = await userDao
       .findUserByUsername(req.body.username);
   if (existingUser) {
       res.sendStatus(403);
       return;
   } else {
       const insertedUser = await userDao
           .createUser(newUser);
       //insertedUser.password = '*****';
       req.session['profile'] = insertedUser;
       res.json(insertedUser);}}


const login = async (req, res) => {
   const user = req.body;
   const username = user.username;
   const password = user.password;
   const existingUser = await userDao .findUserByCredentials(username, password)
   //const match = await bcrypt
       //.compare(password, existingUser.password);
   if (existingUser) {
       //existingUser.password = '*****';
       req.session['profile'] = existingUser;
       res.json(existingUser);
   } else {
       res.sendStatus(403);}}


const profile = (req, res) => {
  res.json(req.session['profile']);
}

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
}




module.exports = (app) => {
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:id', findUserById);
  app.get('/api/users/email/:email', findUserByEmail);
  app.get('/api/users/username/:username', findUserByUsername);
  app.post('/api/users/credentials', findUserByCredentials);
  app.post('/api/users', createUser);
  app.put('/api/users/:id', updateUser);
  app.delete('/api/users/:id', deleteUser);
  app.post('/api/auth/signup', signup);
  app.post('/api/auth/profile', profile);
  app.post('/api/auth/login', login);
  app.post('/api/auth/logout', logout);
}