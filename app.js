
console.log("APP IS RUNNING");

require("dotenv").config();


const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

// ---------------------
// Middleware
// ---------------------

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static folder (for uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ---------------------
// View Engine
// ---------------------

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// ---------------------
// Session
// ---------------------

app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret",
    resave: false,
    saveUninitialized: false,
  })
);

// Make user available in ALL EJS files
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// ---------------------
// Routes
// ---------------------

const authRoutes = require("./src/routes/auth");
const postRoutes = require("./src/routes/posts");
const feedRoutes = require("./src/routes/feed");
const commentRoutes = require("./src/routes/comment");

app.use("/", authRoutes);
app.use("/", postRoutes);
app.use("/", feedRoutes);
app.use("/", commentRoutes);


// ---------------------
// Server
// ---------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
