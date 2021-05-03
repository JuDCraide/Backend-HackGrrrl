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
    campanhas_direcionadas: {
        type: Number,
        required: true,
        default: 0,
    },
    inclusao_corpos: {
        type: Number,
        required: true,
        default: 0,
    },
    inclusao_racial: {
        type: Number,
        required: true,
        default: 0,
    },
    inclusao_genero: {
        type: Number,
        required: true,
        default: 0,
    },
    inclusao_idade: {
        type: Number,
        required: true,
        default: 0,
    },
    posicionamento: {
        type: Number,
        required: true,
        default: 0,
    },
});

module.exports = model('Company', Company);