const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.route('/register').post(authController.signUp);
router.route('/login').post(authController.login);

module.exports = router;
