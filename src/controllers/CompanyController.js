const axios = require('axios');
const Company = require('../models/Company');

module.exports = {

    async list(req, res) {
        const company = await Company.find();
        return res.json(company);
    },

    async index(req, res) {
        const { id } = req.params;
        console.log(id);
        const company = await Company.findById(id);
        return res.json(company);
    },

    async create(req, res) {
        const { name, details, score } = req.body;

        const company = await Company.create({
            name,
            details,
            score
        })

        return res.json(company);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, details, score } = req.body;

        const company = await Company.updateOne({_id: id},{
            name,
            details,
            score
        })

        return res.json(company);
    }
};