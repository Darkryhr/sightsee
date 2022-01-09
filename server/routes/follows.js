const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

//* users follows
router.route('/').get(authController.protect);

//* add/remove follow
router.route('/:id').get(authController.protect);

//* all follows
router.route('/all').get(authController.protect);

module.exports = router;
