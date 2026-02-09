const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser
} = require("../controllers/authController");

// pages
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});


// actions
router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
