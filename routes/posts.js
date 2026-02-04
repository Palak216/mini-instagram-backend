const path = require("path");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");


const posts = [];
let postId = 1;

// 🔐 Auth middleware
function isLoggedIn(req, res, next) {
  if (!req.session.user) return res.redirect("/login");
  next();
}
// ☁️ Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mini-instagram",
    allowed_formats: ["jpg", "png", "jpeg"]
  }
});
const upload = multer({ storage });

// Create post page
router.get("/post", isLoggedIn, (req, res) => {
  res.render("post");
});

// Create post with image
router.post("/post", isLoggedIn, upload.single("image"), (req, res) => {
  posts.push({
    id: postId++,
    username: req.session.user.username,
    content: req.body.content,
    image: req.file ? req.file.filename : null,
    likes: [],
    comments: [],
    createdAt: new Date()
  });
  res.redirect("/feed");
});

// Feed
router.get("/feed", isLoggedIn, (req, res) => {
  res.render("feed", { posts, user: req.session.user });
});

// Like / Unlike
router.post("/like/:id", isLoggedIn, (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  const user = req.session.user.username;

  if (post.likes.includes(user)) {
    post.likes = post.likes.filter(u => u !== user);
  } else {
    post.likes.push(user);
  }
  res.redirect("/feed");
});

// Add comment
router.post("/comment/:id", isLoggedIn, (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  post.comments.push({
    id: Date.now(),
    username: req.session.user.username,
    text: req.body.text
  });
  res.redirect("/feed");
});

// ❌ DELETE OWN COMMENT
router.post("/delete-comment/:postId/:commentId", isLoggedIn, (req, res) => {
  const post = posts.find(p => p.id == req.params.postId);

  post.comments = post.comments.filter(
    c => !(c.id == req.params.commentId && c.username === req.session.user.username)
  );

  res.redirect("/feed");
});

module.exports = router;
