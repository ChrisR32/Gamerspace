const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  createdAt: Date,
  threadId: mongoose.ObjectId,
  content: String,
  userId: mongoose.ObjectId,
  userName: String,
  userAvatar: String,
  niceDate: String,
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
