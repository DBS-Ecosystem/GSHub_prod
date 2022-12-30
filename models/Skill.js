const mongoose = require('mongoose');

const majorGroup = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    submajorGroups: [submajorGroup]
});

const submajorGroup = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    minorGroups: [minorGroups]
});

const minorGroup = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    unitGroups: [unitGroup]
});

const unitGroup = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Skill', majorGroup);