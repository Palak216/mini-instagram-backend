// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// const cloudinary = require("../config/cloudinary");
// const { getCreatePost, createPost } = require("../controllers/postController");

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "mini-instagram",
//     allowed_formats: ["jpg", "png", "jpeg"]
//   }
// });

// const upload = multer({ storage });
// router.get("/post", isloggedin, getCreatePost);
// router.get("/feed", isloggedin, feedController);
// router.get("/post", isLoggedIn, getCreatePost);

// // create post
// router.post("/posts", isloggedin, createPost);

// module.exports = router;
console.log("Posts route loaded");


const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");
const isloggedin = require("../middlewares/authmiddleware");
const { getCreatePost, createPost } = require("../controllers/postController");

// Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mini-instagram",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// Show create post page
router.get("/post", isloggedin, getCreatePost);

// Create post
router.post("/post", isloggedin, upload.single("image"), createPost);

module.exports = router;
