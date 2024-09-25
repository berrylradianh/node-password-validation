const express = require('express');
const { validatePassword } = require('../controllers/passwordController');

const router = express.Router();

router.post('/validate-password', validatePassword);

module.exports = router;
