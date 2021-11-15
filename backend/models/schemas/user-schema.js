const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
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
        require : true
    },
    passwordHash: {
        type: String,
        require : true
    },
    globalRanking: {
        type: Number,
        default: 0.0
    }
},{
    timestamps: true //updated at and created at (date) --

});

userSchema.methods.hashPassword = async function (password){
    const salt = await bcrypt.genSalt(11);
    return await bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}


const User = mongoose.model('user',userSchema, 'user');


module.exports = User;
