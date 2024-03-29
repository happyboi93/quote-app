const { getPosts,getSinglePosts, deletePost, createPost, editPost } = require('./post-controller');
require('./passport')
const passport = require('passport');
const isLoggedIn = require('./auth')
const router = require('express').Router();

router.get('/', (req,res)=>{
  res.redirect('/auth/google')
})
router.get('/auth/google',passport.authenticate('google',{ scope: ['email','profile'] }));
router.get('/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure',
    })
  );
router.get('/protected', isLoggedIn,(req,res)=>{
  res.redirect('/api/quote')
  //res.send(`Welcome to the protected route <br/> <a href='/logout'>Logout</a>`)
})
router.get('/auth/failure', (req,res)=>{
  res.send('something went wrong!')
})
router.get('/logout',isLoggedIn, (req,res)=>{
  req.logout(function(err) {
    if (err) { return next(err) }
    req.session.destroy();
    res.send('Goodbye');
  });
})
router.get('/api/quote',getPosts);
router.get('/api/quote/:id',getSinglePosts);
router.post('/api/quote',isLoggedIn, createPost);
router.put('/api/quote/:id',editPost);
router.delete('/api/quote/:id',isLoggedIn, deletePost);

module.exports = router;