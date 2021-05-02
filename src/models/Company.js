const { Schema, model } = require('mongoose');

const Company = new Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        require: true,
    },
    score: {
        type: Number,
        required: true,
        default: 0, 
    },
});

module.exports = model('Company', Company);