const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

// In-memory users
const users = [];

// Register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Register user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.send("All fields required");
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.send("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    username,
    email,
    password: hashedPassword
  });

  res.redirect("/login");
});

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send("Wrong password");

  // ✅ Save session
  req.session.user = {
    username: user.username,
    email: user.email
  };

  res.redirect("/feed");
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
