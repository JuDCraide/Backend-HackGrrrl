const express = require('express');

const ContactController = require('./controllers/ContactController');
const NewsController = require('./controllers/NewsController');
const CompanyController = require('./controllers/CompanyController');

const routes =  express.Router();

routes.post('/news', NewsController.create);
routes.get('/news', NewsController.list);

routes.post('/companies', CompanyController.create);
routes.put('/companies/:id', CompanyController.update);
routes.get('/companies', CompanyController.list);
routes.get('/companies/:id', CompanyController.index);

routes.post('/contacts', ContactController.create);
routes.get('/contacts', ContactController.list);

module.exports = routes;