const express = require('express');
const authMiddleware = require("../../middlewares/auth.middleware");
const { createProductHandler, getAllProductsHandler } = require('./product.controller');

const router = express.Router();

router.post('/', createProductHandler);
router.get('/', authMiddleware, getAllProductsHandler);

module.exports = router;