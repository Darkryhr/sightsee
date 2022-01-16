const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

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

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/auth', authRoute);
app.use('/follow', followRoute);
app.use('/vacation', vacationRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.use(globalErrorHandler);

module.exports = app;
