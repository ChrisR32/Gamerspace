const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.post("/create", async (req, res) => {
  const { title, iconUrl, info } = req.body;
  const newCategory = Category({
    title,
    info,
    iconUrl,
    createdAt: Date.now(),
  });

  await newCategory.save();
  res.send(newCategory);
});

router.get("/:id", async (req, res) => {
  const cat = await Category.findById(req.params.id);
  if (!cat) {
    res.status(404).send({
      message: "Category not found",
    });
    return;
  }

  res.send(cat);
});

router.get("/", async (req, res) => {
  const cats = await Category.find({});
  res.send(cats);
});

router.delete("/", (req, res) => {
  const { id } = req.query;

  Category.findByIdAndDelete(id, (error, data) => {
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
