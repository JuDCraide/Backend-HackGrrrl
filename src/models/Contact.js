const { Schema, model } = require('mongoose');

const Contact = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
});

module.exports = model('Contact', Contact);