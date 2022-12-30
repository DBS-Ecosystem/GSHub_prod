const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});