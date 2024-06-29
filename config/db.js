// This file has a seperate function to connect to the database
// The name of database will be Ecommerce-App. You can change it.
// This function will be called in server.js

const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'Ecommerce-App',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected'.green);
    } catch (e) {
        console.log('Error:', e.message.bgRed.white);
    }
};

module.exports = connectDB;
