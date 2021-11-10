const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paragraphSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    wordCount: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

const Paragraph = mongoose.model('paragraph',paragraphSchema, 'paragraph');
module.exports = Paragraph;