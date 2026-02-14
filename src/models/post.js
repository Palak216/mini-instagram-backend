const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");
const isLoggedIn = require("../middlewares/authmiddleware");

const {
  getCreatePost,
  createPost,
  deletePost,
  toggleLike
} = require("../controllers/postController");

// Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mini-instagram",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// ================= ROUTES =================

router.get("/post", isLoggedIn, getCreatePost);

router.post("/post", isLoggedIn, upload.single("image"), createPost);

router.post("/delete/:id", isLoggedIn, deletePost);

router.post("/like/:id", isLoggedIn, toggleLike);

module.exports = router;
