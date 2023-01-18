const userController = require('../controllers/userController');

const express = require('express');
const router = express.Router();

router.get('/:email', userController.login);

module.exports = router;