const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");
const { getCreatePost, createPost } = require("../controllers/postController");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mini-instagram",
    allowed_formats: ["jpg", "png", "jpeg"]
  }
});

const upload = multer({ storage });
router.get("/feed", isloggedin, feedController);

// create post
router.post("/posts", isloggedin, createPost);

module.exports = router;
