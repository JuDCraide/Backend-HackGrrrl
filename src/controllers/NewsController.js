const axios = require('axios');
const News = require('../models/News');

module.exports = {

    async list(req, res) {
        const news = await News.find();
        return res.json(news);
    },

    async create(req, res) {
        const { title, link, text } = req.body;

        const news = await News.create({
            title,
            link,
            text
        })

        return res.json(news);
    }
};