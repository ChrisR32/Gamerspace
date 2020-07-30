const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: String,
  info: String,
  iconUrl: String,
  createdAt: Date,
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
