const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nick: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    passwordSalt: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: false
    },
    registerDate: {
        type: Date,
        default: Date.now
    },
    globalRanking: {
        type: Number,
        default: 0.0
    }
});

const User = mongoose.model('user',userSchema, 'user');
module.exports = User;
