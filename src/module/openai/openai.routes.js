const express = require('express');
const { chat } = require('./openai.controller');

const router = express.Router();

router.post('/chat', chat);

module.exports = router;
