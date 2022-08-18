const passport = require('passport');
const checkUserLoggedIn = require('./auth');
const { getPosts, deletePost, createPost, editPost } = require('./post-controller')

const router = require('express').Router();

router.get('/', passport.authenticate('google',{ scope: ['profile', 'email'] }),getPosts);
router.post('/api/quote',checkUserLoggedIn, createPost );
router.put('/api/quote/:id',checkUserLoggedIn, editPost); 
router.delete('/api/quote/:id',checkUserLoggedIn ,deletePost );

router.get('/auth/google/callback', passport.authenticate('google',
    { failureRedirect: '/failed' }), 
    (req,res)=>{
        res.redirect('/')
    });
// Logut
router.get('/logout',(req,res)=>{
    req.session = null;
    req.logOut();
    res.redirect('/');
})

module.exports = router;