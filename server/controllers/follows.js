const catchAsync = require('../utils/catchAsync');
const Follow = require('../models/follow');
// const Follow = require()

exports.followVacation = catchAsync(async (req, res) => {
  // console.log(req.params);
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
  const result = Follow.findAll({
    where: {
      userId: req.user.id,
    },
  });
  const followed = result.map(follow => follow.id);
  res.status(201).json({
    message: 'success',
    data: {
      followed,
    },
  });
});
