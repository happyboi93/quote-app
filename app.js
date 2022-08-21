// require our packages
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const session = require('express-session');
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
 app.use(session({
   secret: process.env.SECRET,
   resave:false,
   saveUninitialized:false
 }));
app.use(passport.initialize());
app.use(passport.session());
// use express.json
app.use(express.json())

//Configure Session Storage
//app.use(cookieSession({
//  name: 'session-name',
//  keys: ['key1', 'key2']
//}))

//Configure Passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.get('/', (req,res)=>{
  res.redirect('/auth/google')
})
app.use('/', router);

PORT = process.env.PORT
// listen for port && connect to database..
const start= async()=>{
  try {
     app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${PORT}...`)
  })
   await DB_CONNECT(process.env.DB_CONNECT)
  } catch (error) {
    console.log(error)
  }
}

start();