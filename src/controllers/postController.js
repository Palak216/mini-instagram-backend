const posts = [];
let postId = 1;

exports.getPostPage = (req, res) => {
  res.render("post");
};

exports.createPost = (req, res) => {
  posts.push({
    id: postId++,
    username: req.session.user.username,
    content: req.body.content,
    image: req.file ? req.file.path : null,
    likes: [],
    comments: [],
    createdAt: new Date()
  });

  res.redirect("/feed");
};

exports.getFeed = (req, res) => {
  res.render("feed", { posts, user: req.session.user });
};

exports.toggleLike = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  const user = req.session.user.username;

  if (post.likes.includes(user)) {
    post.likes = post.likes.filter(u => u !== user);
  } else {
    post.likes.push(user);
  }
  res.redirect("/feed");
};

exports.addComment = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  post.comments.push({
    id: Date.now(),
    username: req.session.user.username,
    text: req.body.text
  });
  res.redirect("/feed");
};

exports.deleteComment = (req, res) => {
  const post = posts.find(p => p.id == req.params.postId);
  post.comments = post.comments.filter(
    c => !(c.id == req.params.commentId &&
           c.username === req.session.user.username)
  );
  res.redirect("/feed");
};
