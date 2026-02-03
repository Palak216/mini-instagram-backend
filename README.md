# Mini Instagram Backend

A simple Instagram clone backend built with **Node.js**, **Express**, and **EJS**, featuring **authentication, posts, likes, comments**, and **image upload via Cloudinary**.

---

## ⚡ Features

- User registration & login with **bcrypt password hashing**
- Create posts with **images** (Cloudinary integration)
- Like/unlike posts
- Comment & delete own comments
- Simple feed displaying all posts
- Ready for future upgrades: **JWT auth, SQL database, controllers/services, CRUD APIs, pagination**

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Template Engine:** EJS
- **File Upload:** Multer + Cloudinary
- **Authentication:** express-session (temporary), bcrypt
- **Database:** None yet (in-memory arrays; planning SQL)
- **Environment Variables:** dotenv

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Palak216/mini-instagram-backend.git
cd mini-instagram-backend
Install dependencies

npm install
Configure environment variables

Copy .env.example to .env:

# Windows
copy .env.example .env

# Mac / Linux
cp .env.example .env
Open .env and fill in your credentials:

PORT=8080
SESSION_SECRET=your_session_secret_here
JWT_SECRET=your_jwt_secret_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mini_instagram
Run the server

node index.js
Open in browser

Visit http://localhost:8080 to see your mini Instagram clone in action.
