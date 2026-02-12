const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

// Temporary in-memory users array
const users = [];

// ------------------
// Pages
// ------------------

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

// ------------------
// Register
// ------------------

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    email,
    password: hashedPassword
  });

  res.redirect("/login");
});

// ------------------
// Login
// ------------------

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.send("User not found");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.send("Invalid password");
  }

  req.session.user = user;

  res.redirect("/");
});

module.exports = router;
