const express = require('express');
const { createProductHandler, getAllProductsHandler } = require('./product.controller');

const router = express.Router();

router.post('/', createProductHandler);
router.get('/', getAllProductsHandler);

module.exports = router;