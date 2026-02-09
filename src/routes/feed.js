const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../middlewares/isloggedin");
const { getFeed } = require("../controllers/feedController");

router.get("/feed", isAuthenticated, getFeed);

module.exports = router;
