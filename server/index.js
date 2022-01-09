require('dotenv').config();
const sequelize = require('./utils/database');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');

sequelize
  .sync()
  .then(_ => console.log('Connected to database'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => console.log('listening on port 3000'));

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
