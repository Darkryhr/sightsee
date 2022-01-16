const express = require('express');
const authController = require('../controllers/auth');
const followController = require('../controllers/follows');
const router = express.Router();

//* users follows
router.route('/').get(authController.protect, followController.getFollowed);

//* add/remove follow
router
  .route('/:id')
  .get(authController.protect, followController.followVacation)
  .delete(authController.protect, followController.removeVacation);

//* all follows
router.route('/all').get(authController.protect);

module.exports = router;
