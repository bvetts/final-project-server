const mongoose = require('mongoose');
//const tuitsDao = require('./database/tuits/tuits-dao');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb://localhost:27017/webdev');

app.use(express.json());


//app.set('trust proxy', 1);//for production???
app.use(session({
  secret: 'SECRETO',
  cookie: { secure: false}


}));

app.use(cors({
   credentials: true,
   origin: 'http://localhost:3000'
}));


//require("./controllers/auth-controller")(app);
require("./controllers/users-controller")(app);
require("./controllers/session-controller")(app);


app.listen(process.env.PORT || 4000);