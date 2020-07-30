const express = require("express");
const router = express.Router();
const News = require("../models/News");

router.post("/create", async (req, res) => {
  const { firstName, lastName, eMail, userSubscribed, createdAt } = req.body;
  const newNews = News({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    eMail: req.body.eMail,
    userSubscribed: true,
    createdAt: Date.now(),
  });

  await newNews.save();
  res.send("./");
});

router.get("/:id", async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) {
    res.status(404).send({
      message: "Thread not found",
    });
    return;
  }

  res.send("./");
});

router.post("/register", async (req, res) => {
  const userExists = await News.findOne({ eMail: req.body.eMail });
  if (userExists) {
    res.status(400).send({
      message: "email_exists",
    });
    return;
  }
  const newNews = News({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    eMail: req.body.eMail,
    userSubscribed: true,
    createdAt: Date.now(),
  });

  await newNews.save();
  res.sendStatus(201);
  res.send("./");
});

module.exports = router;
