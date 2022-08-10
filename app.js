// require our packages
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport')
const ejs = require('ejs')

// setup application
const app = express();

// setup view engine EJS, body-parser & express-static
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

// setup session 
app.use(session({
  secret: process.env.SECRET,
  resave:false,
  saveUninitialized:false
}))

// listen for port
app.listen(5000,()=>{
  console.log('server is running on port 5000...')
})
