const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
  title: String,
  createdAt: Date,
  info: String,
  iconUrl: String,
  categoryId: mongoose.ObjectId,
  caregoryName: String,
});

const Forum = mongoose.model("Forum", ForumSchema);
module.exports = Forum;
