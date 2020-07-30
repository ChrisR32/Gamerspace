const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  firstName: String,
  lastName: String,
  eMail: String,
  userSubscribed: Boolean,
  createdAt: Date,
});

const News = mongoose.model("News", NewsSchema);
module.exports = News;
