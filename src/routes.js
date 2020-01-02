const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
routes.get("/search", ProductController.index);
routes.post("/search", ProductController.store);

module.exports = routes;