const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
