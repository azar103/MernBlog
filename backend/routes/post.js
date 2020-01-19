const Post = require('../models/Post')
const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post')
router.post('/', postCtrl.createPost)
router.get('/:id', postCtrl.getOnePost)
router.get('/', postCtrl.getAllPosts)
router.put('/:id', postCtrl.updatePost)
router.delete('/:id', postCtrl.deletePost)

module.exports = router
