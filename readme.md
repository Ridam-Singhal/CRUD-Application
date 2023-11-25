# CRUD Application Backend

This is a simple CRUD (Create, Read, Update, Delete) application backend built using Node.js and MongoDB. This application serves to manage data by providing essential operations: creating new records, reading existing ones, updating data, and deleting entries.

## Getting Started

### Tech Stack Used

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Usage

### Running the Application

Start the application with the following command:

```
npm start
```

This will start the server at `http://localhost:3000` (or another port specified in your `.env` file).

### User Models

The application handles user data with the following model:

#### User Model

- **Fields:**
  - `username` (String): User's username
  - `email` (String): User's email address
  - `password` (String): User's password (hashed)

### Controllers

The application uses the following controllers:

- `userController`: Handles operations related to user data.
