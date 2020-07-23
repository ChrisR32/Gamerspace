const express = require("express");
const router = express.Router();
const Forum = require('../models/Forum');

router.post('/create', async (req, res) => {
   const {title, categoryId, info, iconUrl, categoryName} = req.body;
   const newForum = Forum({
       title,
       info,
       iconUrl,
       createdAt: Date.now(),
       categoryId,
       categoryName
   });

   await newForum.save();
   res.send(newForum);
});

router.get('/:id', async (req, res) => {
   const forum = await Forum.findById(req.params.id);
   if (!forum) {
       res.status(404).send({
           message: 'Forum not found'
       });
       return;
   }

   res.send(forum);
});

router.get('/category/:id', async (req, res) => {
    const forums = await Forum.find({categoryId: req.params.id});
    res.send(forums);
})

module.exports = router;