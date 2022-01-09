const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authRoute = require('./routes/auth');
const vacationRoute = require('./routes/vacations');
const followRoute = require('./routes/follows');
const app = express();

//* MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

//* ROUTES

app.use('/auth', authRoute);
app.use('/follow', followRoute);
app.use('/vacation', vacationRoute);

app.all('*', (req, res, next) => {
  next(`Can't find ${req.originalUrl} on this server!`);
});

module.exports = app;
