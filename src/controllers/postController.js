const db = require("../config/db");


exports.getCreatePost = (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("post");
};

exports.createPost = async (req, res) => {
  try {
    if (!req.session.user) {
      return res.redirect("/login");
    }

    const { caption } = req.body;
    const imageUrl = req.file ? req.file.path : null;

    // get user id
    const [users] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [req.session.user.email]
    );

    if (users.length === 0) {
      return res.status(400).send("User not found");
    }

    const userId = users[0].id;

    await db.query(
      "INSERT INTO posts (user_id, caption, image_url) VALUES (?, ?, ?)",
      [userId, caption, imageUrl]
    );

    res.redirect("/feed");
  } catch (err) {
    console.error("CREATE POST ERROR:", err);
    res.status(500).send("Post creation failed");
  }
};
