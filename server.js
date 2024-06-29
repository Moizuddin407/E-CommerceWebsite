const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
// Ensure the path is correct
const connectDB = require('./config/db');
// Moves the flow of code to authRoute.js
const authRoutes = require('./routes/authRoute.js')

// Used to enable variables of dotenv to be accessed by developer.
dotenv.config();

// Function called from db.js
connectDB();

//rest obj
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server running on port', PORT.bgCyan.white);
});