const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController');

// DELETE comment
router.delete('/:id', CommentController.deleteComment); // ✅ must be a function

module.exports = router;
