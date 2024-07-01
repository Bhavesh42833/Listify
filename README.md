# Listify Backend

Welcome to the backend of **Listify**, a comprehensive task manager application. This README will guide you through the setup and technologies used in the backend, which includes features like authentication, secure password handling, and personalized user interfaces.

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Installation](#installation)
5. [Running the Server](#running-the-server)
6. [Project Structure](#project-structure)
7. [API Endpoints](#api-endpoints)
8. [CRUD Operations](#crud-operations)
9. [Authentication](#cookie-manager)

## Introduction
The backend of Listify is built to provide a robust and secure environment for managing tasks. It includes authentication, user management, and task management, using modern technologies to ensure security and efficiency.

## Technologies Used
- **Node.js**: A JavaScript runtime for building scalable network applications.
- **Express.js**: A web application framework for Node.js to build APIs.
- **MongoDB**: A NoSQL database for storing user data and tasks.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcrypt**: A library to hash passwords securely.
- **jsonwebtoken (JWT)**: For generating and verifying JSON Web Tokens.
- **cookie-parser**: Middleware to parse cookies for authentication.
- **Authentication Middleware**: Custom middleware to protect routes.

## Features
- **User Authentication**: Secure login, logout, and registration using JWT tokens and bcrypt.
- **Personalized User Interface**: Each user has access to their own set of tasks.
- **Secure Password Handling**: Passwords are hashed using bcrypt before storing in the database.
- **Session Management**: Cookies are used to manage user sessions.

## Installation

### Prerequisites
Make sure you have Node.js and npm installed on your machine. Also, ensure you have MongoDB installed and running.

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/listify-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd listify-backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Server

### Development Mode
To start the server in development mode, run:
```bash
npm run dev
```
This will start the server with hot reloading enabled.

### Production Mode
To start the server in production mode, run:
```bash
npm start
```

## Project Structure
Here is an overview of the project structure:

```
listify-backend/
├── controllers/
│   ├── tasks.js
│   └── users.js
├── Data/
│   ├── database.js
│   └── variable.env
├── middlewares/
│   ├── auth.js
│   └── error.js
├── models/
│   ├── task.js
│   └── users.js
├── routes/
│   ├── tasks.js
│   └── users.js
├── utilities/
│   └── features.js
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

## API Endpoints

### User Routes
- **POST /api/v1/users/register**: Register a new user
- **POST /api/v1/users/login**: Login a user
- **POST /api/v1/users/logout**: Logout a user
- **GET /api/v1/users/my**: Get the logged-in user's details

### Task Routes
- **POST /api/v1/tasks/create**: Create a new task
- **GET /api/v1/tasks/myTask**: Get all tasks for the logged-in user
- **GET /api/v1/tasks/:id**: Get a specific task by its ID
- **PUT /api/v1/tasks/:id**: Update an existing task by its ID
- **DELETE /api/v1/tasks/:id**: Delete a task by its ID

## CRUD Operations
Listify supports full CRUD operations for managing tasks:

- **Create**: Users can create new tasks using the POST `/api/v1/tasks/create` endpoint. This endpoint requires task details in the request body and adds a new task to the database.
  
- **Read**: Users can retrieve their tasks using the GET `/api/v1/tasks/myTask` endpoint. This fetches all tasks associated with the authenticated user. Additionally, users can get specific tasks by ID using the GET `/api/v1/tasks/:id` endpoint.

- **Update**: Users can update existing tasks using the PUT `/api/v1/tasks/:id` endpoint. This requires the task ID and the updated details in the request body.

- **Delete**: Users can delete tasks using the DELETE `/api/v1/tasks/:id` endpoint. This requires the task ID and removes the task from the database.

## Authentication
 ### Role of JWT tokens and Cookies
  JSON Web Tokens(JWT) is used for transmitting data between parties as JSON object.In Listify, JWTs are used for authentication, providing a stateless way to authorize API requests based on token's content.

  Cookies are small pieces of data stored in clients browser.In Listify,cookies are used for session management. Upon successful login, a session is set in client's browser, containing a session identifier that allows the server to identify the user for subsequent requests.

  This dual approach balances security and usability, making Listify's authentication robust and user-friendly.

 ---
Thank you for using Listify! If you have any questions or feedback, feel free to reach out.

**Happy Tasking!**
