const Vacation = require('../models/vacation');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const cache = require('../utils/cache');

exports.getAllVacations = catchAsync(async (req, res) => {
<<<<<<< HEAD:controllers/vacations.js
=======
  console.log('REACHED');
>>>>>>> 4bb7388cb27d88c270147be72bd17f078aa899aa:server/controllers/vacations.js
  if (!cache.has('vacations') || cache.isExpired('vacations', 60)) {
    const vacations = await Vacation.findAll();
    cache.set('vacations', vacations);
  }
  res.status(200).json({
    message: 'success',
    data: {
      vacations: cache.get('vacations'),
    },
  });
});

exports.getOneVacation = catchAsync(async (req, res) => {
  if (
    !cache.has(`vacation_${req.params.id}`) ||
    cache.isExpired(`vacation_${req.params.id}`)
  ) {
    const vacation = await Vacation.findByPk(req.params.id);
    cache.set(`vacation_${req.params.id}`, vacation);
  }
  res.status(200).json({
    message: 'success',
    data: {
      vacation: cache.get(`vacation_${req.params.id}`),
    },
  });
});

exports.createVacation = catchAsync(async (req, res) => {
  const { destination, description, img, price, startDate, endDate } = req.body;
  const vacation = await Vacation.create({
    destination,
    description,
    img,
    price,
    startDate,
    endDate,
  });
  res.status(201).json({
    message: 'success',
    data: {
      vacation,
    },
  });
});

exports.updateVacation = catchAsync(async (req, res) => {
  const { body } = req;
  const vacation = await Vacation.update(body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    message: 'success',
    data: {
      vacation,
    },
  });
});

exports.deleteVacation = catchAsync(async (req, res) => {
  await Vacation.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(204).json({
    message: 'success',
    data: null,
  });
});
