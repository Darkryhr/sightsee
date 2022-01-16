const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authRoute = require('./routes/auth');
const vacationRoute = require('./routes/vacations');
const followRoute = require('./routes/follows');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error');
const app = express();

//* MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

//* ROUTES

app.use('/api/vacation', vacationRoute);
app.use('/api/auth', authRoute);
app.use('/api/follow', followRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
