const express = require("express");
const path = require("path");
const session = require("express-session");
require("dotenv").config();

const authRoutes = require("./src/routes/auth");
const postsRoutes = require("./src/routes/posts");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "miniinsta_secret",
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(authRoutes);
app.use(postsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
