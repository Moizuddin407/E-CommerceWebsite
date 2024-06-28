const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (e) {
        console.log('Error:', e.bgRed.white);
    }
};

module.exports = connectDB;
