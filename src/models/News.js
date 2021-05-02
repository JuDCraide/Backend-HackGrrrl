const { Schema, model } = require('mongoose');

const News = new Schema({
    title: {
        type:String,
        required: true,
    },
    link: {
        type: String,
        require: true,
    },
    text: {
        type: String,
    },
});

module.exports = model('News', News);