const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");
const isLoggedIn = require("../middlewares/authMiddleware");

const {
  getPostPage,
  createPost,
  getFeed,
  toggleLike,
  addComment,
  deleteComment
} = require("../controllers/postController");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mini-instagram",
    allowed_formats: ["jpg", "png", "jpeg"]
  }
});

const upload = multer({ storage });

router.get("/post", isLoggedIn, getPostPage);
router.post("/post", isLoggedIn, upload.single("image"), createPost);
router.get("/feed", isLoggedIn, getFeed);
router.post("/like/:id", isLoggedIn, toggleLike);
router.post("/comment/:id", isLoggedIn, addComment);
router.post("/delete-comment/:postId/:commentId", isLoggedIn, deleteComment);

module.exports = router; 