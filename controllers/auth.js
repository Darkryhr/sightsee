const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const AppError = require('../utils/appError');

//* HELPER FUNCTIONS

const signToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const passwordCompare = async (candidatePassword, userPassword) => {
  const result = await bcrypt.compare(candidatePassword, userPassword);
  return result;
};

exports.signUp = catchAsync(async (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;

  const exists = await User.findOne({
    where: {
      username: username,
    },
  });

  if (exists) return next(new AppError('This username already exists', 401));

  const hashedPass = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    firstName,
    lastName,
    username,
    password: hashedPass,
  });

  console.log('auto-generated ID:', newUser.id);

  const token = signToken(newUser.id);

  res.status(201).json({
    message: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) return next('provide all creds');
  const user = await User.findOne({
    where: { username: username },
  });

  if (!user || !(await passwordCompare(password, user.password)))
    return next(new AppError('Incorrect credentials', 401));

  const token = signToken(user.id);

  res.status(200).json({
    message: 'success',
    token,
    data: {
      user,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  )
    token = req.headers.authorization.split(' ')[1];
  else return next(new AppError('No Token', 400));
  if (!token) return next(new AppError('No Token', 400));

  //* 2. verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //* 3. check if user exists
  const user = await User.findOne({
    where: { id: decoded.id },
  });
  req.user = user;
  next();
});

exports.restrictTo = role => async (req, res, next) => {
  if (role !== req.user.is_admin) {
    return next(
      new AppError('You do not have permission to perform this action', 403)
    );
  }
  next();
};
