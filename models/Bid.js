const mongoose = require('mongoose');
const object = require('./Object');

const bidSchema = new mongoose.Schema({
    project: {
        type: object,
        required: true
    },
    from: {
        type: object,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bid', bidSchema);