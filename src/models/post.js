const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: String,
  image: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
