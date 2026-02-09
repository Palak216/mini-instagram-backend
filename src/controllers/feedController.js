const posts = []; // later: DB

function getFeed(req, res) {
  res.render("feed", {
    user: req.session.user,
    posts
  });
}

module.exports = { getFeed };
