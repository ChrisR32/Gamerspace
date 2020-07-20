const express = require("express");
const router = express.Router();
const Post = require('../models/Post');

router.post('/create', async (req, res) => {
   const {content, userId, threadId} = req.body;
   const newPost = Post({
       content,
       createdAt: Date.now(),
       threadId,
       userId
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