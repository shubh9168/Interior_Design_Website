# Interior_Design_Website
A mini full-stack social media web application built using the MERN stack (MySQL, Express.js, React.js, Node.js). This project demonstrates user authentication, image upload, and CRUD operations for posts.
# 🌐 Full-Stack Social Media Mini Project (MySQL + Express + React)

This is a full-stack social media web application developed using **React.js** on the frontend and **Node.js + Express.js + MySQL** on the backend. It includes secure user authentication, post creation, and CRUD operations through RESTful APIs.

---

## 🚀 Features

- ✅ User Registration & Login
- 🔐 JWT Authentication
- 📝 Create, Update, Delete Users and Feedback
- 🖼️ Image Upload Support (if implemented)
- 🧩 RESTful API Architecture
- 🌍 Responsive React Frontend

---

## 🛠️ Tech Stack

| Layer      | Tech                        |
|------------|-----------------------------|
| Frontend   | React.js, Tailwind CSS      |
| Backend    | Node.js, Express.js         |
| Database   | MySQL                       |
| Auth       | JWT (JSON Web Tokens)       |
| Uploads    | Multer (optional)           |
| Dev Tools  | Nodemon, dotenv             |

## 📁 Project Structure
project-root/
│
├── backend/
│ ├── db.js # MySQL connection setup
│ ├── middleware/ # JWT authentication
│ ├── routes/ # Auth, Feedback, and other APIs
│ └── index.js # App entry
│
├── frontend/ # React app
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js

🗄️ Database Setup (MySQL)
sql

CREATE DATABASE your_database_name;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE feedbacks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT, -- Optional: FK to users table
  message TEXT NOT NULL,
  rating INT,  -- Optional: 1-5 star system
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);


🔧 Backend Setup
cmd
cd backend
npm install
npm start

💻 Frontend Setup
vs code terminal
cd frontend
npm install
npm run dev

App runs on http://localhost:5173/, backend on http://localhost:5000

