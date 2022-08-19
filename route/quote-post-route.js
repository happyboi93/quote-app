const { getPosts, deletePost, createPost, editPost } = require('./post-controller')

const router = require('express').Router();

router.get('/', getPosts);
router.post('/', createPost);
router.put('/:id', editPost);
router.delete('/:id', deletePost);

module.exports = router;