const axios = require('axios');
const Contact = require('../models/Contact');

module.exports = {

    async list(req, res) {
        const contact = await Contact.find();
        return res.json(contact);
    },

    async create(req, res) {
        const { name, email, message } = req.body;

        const contact = await Contact.create({
            name,
            email,
            message
        })

        return res.json(contact);
    }
};