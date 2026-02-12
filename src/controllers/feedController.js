const db = require("../config/db");

exports.getFeed = async (req, res) => {
  try {
    const [posts] = await db.query(
      `SELECT posts.*, users.username 
       FROM posts 
       JOIN users ON posts.user_id = users.id 
       ORDER BY posts.created_at DESC`
    );

    res.render("feed", { posts });
  } catch (err) {
    console.error("FEED ERROR:", err);
    res.send("Error loading feed");
  }
};
