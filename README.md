
# Realtime Chat App 🚀

  

A modern real-time chat application that enables users to communicate instantly through a responsive and intuitive interface.

  

## ✨ Key Features

- 💬 Low-latency real-time chat

- 👥 Private and group chat support

- 🔐 Secure user authentication

- 📱 Responsive across all devices

- 🌐 User online/offline status

- 📍 "Typing" indicators

  

## 🛠️ Tech Stack

  

### Frontend

- React.js

- Socket.io-client

- Tailwind CSS

- Zustand

- Axios

  

### Backend

- Node.js

- Express.js

- Socket.io

- MongoDB

- JWT Authentication

  

## 🗂️ Project Structure

```

realtime-chat-app/

├── frontend/ # React frontend application

├── backend/ # Node.js backend server

├── package.json # Root package.json

└── README.md # Project documentation

```

  

## 🚀 Setup & Installation

  

### Prerequisites

- Node.js (v14 or newer)

- MongoDB

- npm or yarn

  

### Environment Variables

  

#### Backend (.env)

```

PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

```

  

#### Frontend (.env)

```

REACT_APP_API_URL=http://localhost:5000

```

  

### Installation Steps

  

1. Clone repository

```bash

git  clone  https://github.com/username/realtime-chat-app.git

cd  realtime-chat-app

```

  

2. Install dependencies

```bash

# Install root dependencies

npm  install

  

# Install frontend dependencies

cd  frontend

npm  install

  

# Install backend dependencies

cd  ../backend

npm  install

```

  

3. Run the application

```bash

# Development mode

# Terminal 1 - Backend

npm  run  start

  

# Terminal 2 - Frontend

cd  frontend

npm  run  dev

```

  

## 🎯 Features & Usage

  

### Authentication

- Register with email and password

- Login with existing credentials

- Logout to end session

  

### Chat

- Start private chats with other users

- Create group chats

- Send text messages and emojis

- View user online/offline status

- Access chat history

  

## 👨‍💻 Development

  

### Available Scripts

```bash

# Root

npm  run  build  # Build project

npm  run  start  # Run server

  

# Frontend

npm  run  dev  # Run frontend in development mode

npm  run  build  # Build frontend for production

npm  run  test  # Run tests

  

# Backend

npm  run  dev  # Run backend with nodemon

npm  run  start  # Run backend in production mode

```

  

### API Endpoints

  

#### Auth

- POST /api/auth/register

- POST /api/auth/login

- POST /api/auth/logout

  

#### Users

- GET /api/users

- GET /api/users/:id

- PUT /api/users/:id

  

#### Messages

- GET /api/messages

- POST /api/messages

- DELETE /api/messages/:id

  

## 🤝 Contributing

  

1. Fork the repository

2. Create a feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some amazing feature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

  

### Contribution Guidelines

- Follow existing naming conventions

- Add comments for complex code

- Ensure all tests pass

- Update documentation when necessary

  

## 📝 Additional Information

  

### Troubleshooting

-  **Connection Issues**: Ensure MongoDB is running and connection string is correct

-  **404 Errors**: Verify correct routes and endpoints

-  **WebSocket Errors**: Check CORS configuration

  

### License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

  

### Contact

- Email: your.email@example.com

- GitHub: [@username](https://github.com/username)

- Website: https://your-website.com

  

---


