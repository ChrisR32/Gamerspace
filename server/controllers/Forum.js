const express = require("express");
const router = express.Router();
const Forum = require("../models/Forum");

router.post("/create", async (req, res) => {
  const { title, categoryId, info, iconUrl, categoryName } = req.body;
  const newForum = Forum({
    title,
    info,
    iconUrl,
    createdAt: Date.now(),
    categoryId,
    categoryName,
  });

  await newForum.save();
  res.send(newForum);
});

router.get("/:id", async (req, res) => {
  const forum = await Forum.findById(req.params.id);
  if (!forum) {
    res.status(404).send({
      message: "Forum not found",
    });
    return;
  }

  res.send(forum);
});

router.get("/category/:id", async (req, res) => {
  const forums = await Forum.find({ categoryId: req.params.id });
  res.send(forums);
});

router.delete("/:id", (req, res) => {
  const { id } = req.query;

  Forum.findByIdAndDelete(id, (error, data) => {
    if (error) {
      console.log("error in deleting!");
      throw error;
    } else {
      console.log("category has been deleted", data);
      res.status(204).json(data);
    }
  });
});
module.exports = router;
