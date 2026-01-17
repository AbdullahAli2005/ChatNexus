# ChatNexus

## Overview

ChatNexus is a modern, real-time chat application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It leverages **Socket.io** for instant messaging and supports user authentication, image uploads in chats, theme customization, and more.

The application provides a clean, responsive UI for seamless communication between users, with features such as online/offline status indicators and contact filtering. This project demonstrates full-stack development skills, including real-time WebSocket integration, state management, secure authentication, and responsive design.

---

## Features

* **Real-Time Messaging**: Instant chat updates using Socket.io.
* **User Authentication**: Secure signup, login, and logout with JWT-based authorization.
* **Contact Management**: Sidebar with user list, online/offline status, and an "online only" filter.
* **Multimedia Support**: Send text messages and images with preview and upload functionality.
* **Theme Customization**: Multiple themes via DaisyUI, with a settings page for live previews.
* **Profile Management**: Update profile picture and view user details.
* **Responsive Design**: Fully mobile-friendly interface using Tailwind CSS.
* **Additional Pages**: Dedicated pages for signup, login, profile, and settings.

---

## Tech Stack

### Frontend

* React.js
* Zustand (state management)
* Tailwind CSS + DaisyUI (styling and themes)
* Lucide React (icons)
* React Router (navigation)
* React Hot Toast (notifications)

### Backend

* Node.js + Express.js
* MongoDB (database)
* Socket.io (real-time communication)
* JWT (authentication)
* Mongoose (MongoDB ODM)

### Other Tools

* Vite (frontend build tool)
* Nodemon (development server)

---

## Prerequisites

* Node.js (v18 or higher)
* MongoDB (local instance or MongoDB Atlas)
* Git

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/chatnexus.git
cd chatnexus
```

### Set Up Backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file in `/backend` with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatnexus  # or your MongoDB Atlas URI
JWT_SECRET=your_jwt_secret_here
```

Start the backend server:

```bash
npm run dev
```

### Set Up Frontend

Navigate to the frontend directory:

```bash
cd ../frontend
npm install
```

Create a `.env` file in `/frontend` with:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

---

## Access the App

Open the following URL in your browser:

```
http://localhost:5173
```

Sign up for a new account or log in to start chatting.

---

## Usage

* **Sign Up / Log In**: Create an account or log in using email and password.
* **Select a Contact**: Choose a user from the sidebar (online users are shown with green indicators).
* **Send Messages**: Send text messages or upload images via the chat input.
* **Customize Theme**: Use the Settings page to switch between themes with live previews.
* **Update Profile**: Upload a new profile picture from the Profile page.
* **Logout**: Log out securely using the navigation bar.

---

## Project Structure

```text
chatnexus/
├── backend/
│   ├── controllers/     # API controllers
│   ├── models/          # Mongoose models (User, Message)
│   ├── routes/          # Express routes
│   ├── sockets/         # Socket.io event handlers
│   ├── utils/           # Helper functions
│   ├── server.js        # Main server file
│   └── .env             # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/  # React components (Sidebar, ChatContainer, etc.)
│   │   ├── store/       # Zustand stores (useAuthStore, useChatStore)
│   │   ├── lib/         # Utilities (e.g., formatMessageTime)
│   │   ├── constants/   # Constants (e.g., THEMES)
│   │   ├── pages/       # Page components (HomePage, SignUpPage, etc.)
│   │   └── App.jsx      # Main app entry
│   ├── public/          # Static assets (avatar.png, etc.)
│   └── .env             # Frontend environment variables
└── README.md            # Project documentation
```

---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:

   ```bash
   git push origin feature-branch
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
