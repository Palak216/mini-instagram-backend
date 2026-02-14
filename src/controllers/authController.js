exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "1234") {

    // ✅ Add full session object
    req.session.user = {
      id: 1,                // fake id for now
      username: "testuser",
      email: "test@gmail.com"
    };

    return res.redirect("/feed");
  }

  res.render("login", { error: "Invalid credentials" });
};
