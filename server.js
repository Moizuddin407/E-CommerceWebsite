const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db'); // Ensure the path is correct
const authRoutes = require('./routes/authRoute.js')

dotenv.config();

connectDB();
//rest obj
const app = express();
//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);

//rest api
app.get('/', (req, res) => {
    res.send('<h1>Hey</h1>');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server running on port', PORT.bgCyan.white);
});