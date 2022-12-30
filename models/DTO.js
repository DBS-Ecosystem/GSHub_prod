const mongoose = require('mongoose');
const object = require('./Object');

const dtoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    file: Buffer,
    views: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "active"
    },
    issuedBy: {
        type: object,
        required: true
    },
    until: {
        type: Date,
        required: true
    },
    performer: object,
    budget: {
        type: Number,
        required: true
    },
    reward: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DTO', dtoSchema);