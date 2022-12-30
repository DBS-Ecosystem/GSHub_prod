const mongoose = require('mongoose');
const object = require('./Object');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    from: {
        type: object,
        required: true
    },
    project: {
        type: object,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', messageSchema);