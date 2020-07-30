const mongoose = require("mongoose");
const { text } = require("body-parser");
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
  title: String,
  createdAt: Date,
  forumId: mongoose.ObjectId,
  content: JSON,
  userId: mongoose.ObjectId,
  threadUser: String,
  threadAvatar: String,
  forumName: String,
});

const Thread = mongoose.model("Thread", ThreadSchema);
module.exports = Thread;
