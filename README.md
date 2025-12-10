# 📝 WeBlog - MERN Blog Platform

WeBlog is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** blogging application that allows users to create, edit, delete, and interact with blog posts. It includes secure **JWT-based authentication**, a dynamic commenting system, and a responsive modern UI.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User registration & login using **JWT**
- Protected routes for authorized users
- Password encryption using **bcrypt**

### ✍️ Blog Management (CRUD)
- Create new blog posts
- Edit existing blog posts
- Delete owned posts

### 📡 RESTful API
- Clean and scalable Express.js routes
- Proper error handling & validation
- Separate controllers, routes, and models

### 🎨 Responsive UI
- Modern ReactJS frontend
- Styled using CSS / Tailwind / or your chosen method
- Private routes for authenticated users

---

## 🛠️ Tech Stack

### **Frontend**
- React.js
- Axios
- React Router
- Tailwind CSS (optional)

### **Backend**
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Multer (if using image uploads)

---


---

## ⚙️ Installation & Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/WeBlog.git
cd WeBlog

server setup
cd api
npm install

.env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000

to start the server
npm start

client setup
cd ../client
npm install
npm start






