const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const errorAtribute = new Schema({
    char:{
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true
    }
});

const sesionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    paragraph: {
        type: Schema.Types.ObjectId,
        ref: 'paragraph',
        required: false
    },
    velocity: {
        type: Number,
        required: true
    },
    errorCount: {
        type: Number,
        required: true
    },
    errors: {
        type: [errorAtribute],
        required: true
        
    },
    succesCount: {
        type: Number,
        required: true
    },
    sesionTime: {
        type: Number, //Sesion time will be set in seconds.
        required: true
    },
    sesionDate: {
        type: Date,
        default: Date.now
    }
});

const Sesion = mongoose.model('sesion',sesionSchema, 'sesion');
module.exports = Sesion;