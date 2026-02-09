# Mini Instagram Backend

A simple Instagram clone backend built with **Node.js**, **Express**, and **EJS**, featuring **authentication, posts, likes, comments**, and **image upload via Cloudinary**.

This project is built step-by-step to practice **real backend architecture**, refactoring, and Git workflows.

---

## ⚡ Features

- User registration & login with **bcrypt password hashing**
- Create posts with **images** (Cloudinary integration)
- Like / unlike posts
- Comment & delete own comments
- Simple feed displaying all posts
- Session-based authentication with protected routes
- Clean MVC-style refactor (Day 3)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Template Engine:** EJS
- **File Upload:** Multer + Cloudinary
- **Authentication:** express-session, bcrypt
- **Database:** None yet (in-memory arrays)
- **Environment Variables:** dotenv
- **Version Control:** Git & GitHub

---

## 📁 Project Structure (Day 3 – Refactored)

mini-instagram-backend/
│
├── src/
│ ├── controllers/ # Business logic for routes
│ │ ├── authController.js
│ │ └── postController.js
│ │
│ ├── routes/ # Express routes
│ │ ├── auth.js
│ │ └── posts.js
│ │
│ ├── middlewares/ # Custom middlewares
│ │ └── authMiddleware.js
│ │
│ └── services/ # Future DB / service layer
│
├── config/
│ └── cloudinary.js # Cloudinary configuration
│
├── views/ # EJS templates
│ ├── feed.ejs
│ ├── login.ejs
│ ├── register.ejs
│ └── post.ejs
│
├── uploads/ # Local uploads (gitignored)
├── index.js # Application entry point
├── .env.example # Environment variables template
├── .gitignore
├── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Palak216/mini-instagram-backend.git
cd mini-instagram-backend
2️⃣ Install dependencies
npm install
3️⃣ Configure environment variables
Copy .env.example to .env:

Windows

copy .env.example .env
Mac / Linux

cp .env.example .env
Fill in your credentials inside .env:

PORT=8080
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
4️⃣ Run the server
node index.js
5️⃣ Open in browser
Visit:

http://localhost:5000;
```
---

🔐 ## 🔐 Day 4 – Authentication & Security

- Session-based authentication using express-session
- Password hashing using bcrypt
- Authorization middleware to protect private routes
- Ownership checks for posts and comments
- Basic input validation on auth and content routes

> JWT-based authentication will be implemented in a later iteration.

- Sessions are stored server-side to reduce token exposure risks.

This structure mirrors real-world backend practices and prepares
the project for future scalability (roles, JWT, database integration).
