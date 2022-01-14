const catchAsync = require('../utils/catchAsync');
const Follow = require('../models/follow');
const AppError = require('../utils/appError');
const cache = require('../utils/cache');

exports.followVacation = catchAsync(async (req, res) => {
  await Follow.create({
    vacationId: req.params.id,
    userId: req.user.id,
  });
  res.status(201).json({ message: 'success' });
});

exports.removeVacation = catchAsync(async (req, res) => {
  await Follow.destroy({
    where: {
      userId: req.user.id,
      vacationId: req.params.id,
    },
  });
  res.status(201).json({ message: 'success' });
});

exports.getFollowed = catchAsync(async (req, res) => {
  if (
    !cache.has(`${req.user.id}_followed`) ||
    cache.isExpired(`${req.user.id}_followed`, 60)
  ) {
    const result = await Follow.findAll({
      where: {
        userId: req.user.id,
      },
    });
    let followed = [];
    if (result.length) {
      followed = result.map(follow => follow.vacationId);
    }
    cache.set(`${req.user.id}_followed`, followed);
  }
  res.status(201).json({
    message: 'success',
    data: {
      followed: cache.get(`${req.user.id}_followed`),
    },
  });
});
