const express = require('express');
const authController = require('../controllers/auth');
const vacationController = require('../controllers/vacations');
const router = express.Router();

router.route('/').get(vacationController.getAllVacations);
router
  .route('/:id')
  .get(authController.protect, vacationController.getOneVacation);

module.exports = router;
