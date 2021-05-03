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
        const { name, details, campanhas_direcionadas, inclusao_corpos, inclusao_racial, inclusao_genero, inclusao_idade, posicionamento } = req.body;

        const score = (campanhas_direcionadas + inclusao_corpos + inclusao_racial + inclusao_genero + inclusao_idade + posicionamento) / 6;

        if (score < 0 || score > 5) {
            return res.status(400);
        }

        const company = await Company.create({
            name,
            details,
            score,
            campanhas_direcionadas,
            inclusao_corpos,
            inclusao_racial,
            inclusao_genero,
            inclusao_idade,
            posicionamento,
        })

        return res.json(company);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, details, campanhas_direcionadas, inclusao_corpos, inclusao_racial, inclusao_genero, inclusao_idade, posicionamento } = req.body;
        
        const score = (campanhas_direcionadas + inclusao_corpos + inclusao_racial + inclusao_genero + inclusao_idade + posicionamento) / 6;

        if (score < 0 || score > 5 ||
            campanhas_direcionadas < 0 || campanhas_direcionadas > 5 ||
            inclusao_corpos < 0 || inclusao_corpos > 5 ||
            inclusao_racial < 0 || inclusao_racial > 5 ||
            inclusao_genero < 0 || inclusao_genero > 5 ||
            inclusao_idade < 0 || inclusao_idade > 5 ||
            posicionamento < 0 || posicionamento > 5) {
            return res.status(400);
        }

        const company = await Company.updateOne({ _id: id }, {
            name,
            details,
            score,
            campanhas_direcionadas,
            inclusao_corpos,
            inclusao_racial,
            inclusao_genero,
            inclusao_idade,
            posicionamento,
        })

        return res.json(company);
    }
};