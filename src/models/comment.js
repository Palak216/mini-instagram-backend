const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authmiddleware");
const {
  addComment,
  deleteComment
} = require("../controllers/commentController");

// add comment
router.post("/:postId", authMiddleware, addComment);

// delete comment
router.delete("/:commentId", authMiddleware, deleteComment);

module.exports = router;
