const express = require("express");
const path = require("path");
const session = require("express-session");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const postsRoutes = require("./routes/posts");

const app = express();
const port = 8080;
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//session
app.use(
  session({
    secret: "miniinsta_secret",
    resave: false,
    saveUninitialized: false
  })
);

// 🔥 serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(authRoutes);
app.use(postsRoutes);


//port running
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
