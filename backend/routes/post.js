const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('/posts', postCtrl.getAllPosts);
router.post('/posts', multer, postCtrl.createPost);
router.get('/profil/:id', postCtrl.userAllPosts);

module.exports = router;