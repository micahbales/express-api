const express = require('express');
const router = express.Router();

var Product = require('../models/product');

// localhost:3000/api/products
Product.methods(['get', 'post', 'put', 'delete']);
Product.register(router, '/products');

module.exports = router;
