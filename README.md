# E-learning Platform RESTful API

## 📌 Project Overview
This is a **RESTful API** for an E-learning platform that allows course providers to manage students and courses. It enables user authentication, course creation, student enrollment, and more.

## 🚀 Features
- **User Authentication** (Register/Login with JWT)
- **Course Management** (Create,Fetch courses)
- **Enrollments** (Enroll students, Manage enrollments)
- **MongoDB Atlas Integration**
- **RESTful API Architecture**

## 🛠 Tech Stack
- **Node.js** (Express.js)
- **MongoDB Atlas** (Mongoose ODM)
- **JWT** (Authentication)
- **Render.com** (Deployment)
- **Postman** (API Documentation)

---

## ⚙️ Setup and Installation
### **1. Clone the Repository**
```sh
git clone https://github.com/chinenyv/E-learning-platform-restful-api/
cd e-learning-platform-api
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=
JWT_SECRET=your_secret_key
```

### **4. Start the Server**
```sh
npm start
```
_Server will run on `http://localhost:5000`_

---

## 📌 API Endpoints
### **🔐 Authentication**
| Method | Endpoint | Description |
|--------|----------|--------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Log in and get a token |

### **📚 Courses**
| Method | Endpoint | Description |
|--------|----------|--------------|
| `POST` | `/api/courses` | Create a new course |
| `GET` | `/api/courses` | Get all courses |


### **👨‍🎓 Enrollments**
| Method | Endpoint | Description |
|--------|----------|--------------|
| `POST` | `/api/enrollments/enroll` | Enroll a student |
| `GET` | `/api/enrollments/` | Get a student's enrollments |
| `DELETE` | `/api/enrollments/:id` | Remove a student's enrollment |

---

## 🚀 Deployment
This API is deployed on **Render.com**: [Live API]https://e-learning-platform-restful-api.onrender.com

---

## 📜 API Documentation
The API documentation is available on **Postman**:
🔗 [Postman Collection]https://documenter.getpostman.com/view/29210176/2sAYXECcSR

---

## 📝 Author
Developed by **chinenye** 🚀

Feel free to contribute or report issues!

📧 Contact: chinenyebella12@gmail.com

