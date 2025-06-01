# ✨ Template Cloner – Frontend

A sleek, responsive React application that allows users to browse, clone, and customize templates with a modern UI and real-time feedback.

---

## 🧩 Tech Stack

| Layer       | Technology                |
| ----------- | ------------------------- |
| Frontend    | React, Vite, Tailwind CSS |
| State Mgmt  | React Hooks               |
| UI Feedback | React Toastify            |
| Icons       | Lucide Icons              |
| API Comm    | Axios                     |

---

## 🚀 Getting Started

### 1. 📦 Clone the repository

```bash
git clone https://github.com/Creat1ve-shubh/TemplateCloner---Frontend.git

```

### 2. ⚙️ Install dependencies

```bash
npm install
```

### 3. 🏃 Run the application

```bash
npm run dev
```

> The application will be available at `http://localhost:5173/` by default.

---

## 🧪 Testing

*Note: Testing setup is pending.*

---

## 🧠 Why This Stack? (3-minute rationale)

* **React + Vite**: Offers a fast and efficient development environment with hot module replacement and optimized builds.
* **Tailwind CSS**: Enables rapid UI development with utility-first classes, ensuring a consistent and responsive design.
* **React Toastify**: Provides user-friendly notifications for actions like cloning success or failure.
* **Lucide Icons**: Enhances the UI with clean and customizable icons.
* **Axios**: Simplifies HTTP requests to the backend API.

---

## 🌱 Project Structure

```bash
.
├── public
├── src
│   ├── api
│   ├── assets
│   ├── pages
        ├── TemplateList.jsx
        ├── CloneModal.jsx
│   └── utils
        ├── axiosInstance.js
│    ├── App.css
│    ├── App.jsx 
│    ├── index.css
│    ├── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---
```bash
Git Branches
├── Main  //Main branch holding production code
├── UI    //UI/UX based changes staged here
├── Testing  //Testing based changes staged here
├── Connectivity  //Network based changes staged here


```
---

## 📦 API Endpoints 

*Note: Ensure the backend API is running and accessible.*

*Insert stub auth in the headers while testing in postman*

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| GET    | `/templates/user`  | Retrieve user templates    |
| POST   | `/templates/clone` | Clone an existing template |
---

*Screenshots*

Frontend:

Error handling 
![image](https://github.com/user-attachments/assets/dccac460-eaf6-47fa-91a9-8fa1eb20f9fb)





Homepage:
![image](https://github.com/user-attachments/assets/38c278f4-3506-4f46-ab30-7736138395de)

Clone message:
![image](https://github.com/user-attachments/assets/1a33bbd6-43c0-489c-b2eb-bac83e774f2b)

New Cloned template:
![image](https://github.com/user-attachments/assets/bd3a45d7-5fc2-4f65-92f3-a362b9475a72)


---
*Video*


https://github.com/user-attachments/assets/979ab550-41a1-47dc-98e0-ad822fce2e16

---
## 🌐 Deployment

*Vercel* - pending..

---

