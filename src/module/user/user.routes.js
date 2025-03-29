const express = require('express');
const { createUserHandler, getAllUsersHandler } = require('./user.controller');

const router = express.Router();

router.post('/', createUserHandler);
router.get('/', getAllUsersHandler);

module.exports = router;
