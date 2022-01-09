const Vacation = require('../models/vacation');
const catchAsync = require('../utils/catchAsync');

exports.getAllVacations = catchAsync(async (req, res) => {
  const vacations = await Vacation.findAll();
  res.status(200).json({
    message: 'success',
    data: {
      vacations,
    },
  });
});

exports.getOneVacation = catchAsync(async (req, res) => {
  const vacation = await Vacation.findByPk(req.params.id);
  res.status(200).json({
    message: 'success',
    data: {
      vacation,
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
