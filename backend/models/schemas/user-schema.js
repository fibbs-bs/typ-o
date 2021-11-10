const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nick: {
        type: String,
        required: [true,"El nick es campo obligatorio!"]
    },
    mail: {
        type: String,
        validate: [validator.isEmail,"Porfavor ingresa un email correcto!"],
        required: [true,"El mail es campo obligatorio!"]
    },
    passwordSalt: {
        type: String,
        required: [true,"La contraseña es campo obligatorio!"]
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
