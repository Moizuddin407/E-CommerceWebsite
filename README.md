# MERN Stack eCommerce App

## Full-Stack Web Development Tutorial

Welcome to the MERN Stack eCommerce App tutorial repository! This project walks you through the process of building a full-stack web application using MongoDB, Express, React, and Node.js. In this tutorial, you'll learn how to create a responsive and dynamic user interface with React, develop a robust back-end API with Express and Node.js, and store data in a NoSQL database with MongoDB.

## Features

| Feature              | Description                                                      |
|----------------------|------------------------------------------------------------------|
| **User Authentication** | Register and log in with secure authentication.               |
| **Product Management**  | Create, read, update, and delete products.                    |
| **Shopping Cart**       | Add and remove products from the cart.                        |
| **Order Management**    | Place and track orders.                                       |
| **Responsive Design**   | Mobile-friendly and responsive user interface.                |

## Technologies Used

| Technology | Description                                     |
|------------|-------------------------------------------------|
| **MongoDB**    | NoSQL database for storing user and product data. |
| **Express**    | Web framework for building the back-end API.       |
| **React**      | Library for building the front-end user interface. |
| **Node.js**    | JavaScript runtime for executing server-side code. |

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/your-username/mern-ecommerce-app.git
   ```
2. **Navigate to the project directory**
   ```sh
   cd mern-ecommerce-app
   ```
3. **Install dependencies for both client and server**
   ```sh
   npm install
   cd client
   npm install
   ```
4. **Create a `.env` file in the root directory and add the following**
   ```
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

### Running the Application

1. **Start the server**
   ```sh
   npm run server
   ```
2. **Start the client**
   ```sh
   cd client
   npm start
   ```

3. **Open your browser and navigate to**
   ```
   http://localhost:3000
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- MongoDB
- Express.js
- React
- Node.js
