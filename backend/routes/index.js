const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.joeRoute);

module.exports = routes;