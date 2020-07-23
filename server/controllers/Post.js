const express = require("express");
const router = express.Router();
const Post = require('../models/Post');
const today = Date.now();

router.post('/create', async (req, res) => {
   const {content, userId, threadId, userName, userAvatar, niceDate} = req.body;
   const newPost = Post({
       content,
       userName,
       createdAt: today,
       niceDate,
       threadId,
       userId,
       userAvatar
   });

   await newPost.save();


});

router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404).send({
            message: 'Category not found'
        });
        return;
    }
 
    res.send(post);
 });

router.get('/thread/:id', async (req, res) => {
    const posts = await Post.find({threadId: req.params.id});
    res.send(posts);
})

module.exports = router;