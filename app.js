// require our packages
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const DB_CONNECT = require('./db/connection');
const router = require('./route/quote-post-route');
require('./route/passport');
// setup application
const app = express();

// setup body-parser & express-static
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static('public'));

// setup session 
// app.use(session({
//   secret: process.env.SECRET,
//   resave:false,
//   saveUninitialized:false
// }));

// use express.json
app.use(express.json())

//Configure Session Storage
app.use(cookieSession({
  name: 'session-name',
  keys: ['key1', 'key2']
}))

//Configure Passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', router);


// listen for port && connect to database..
const start= async()=>{
  try {
     app.listen(process.env.PORT,()=>{
  console.log('server is running on port 5000...')
  })
   await DB_CONNECT(process.env.DB_CONNECT)
  } catch (error) {
    console.log(error)
  }
  
}

start();