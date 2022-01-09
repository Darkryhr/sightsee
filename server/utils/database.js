const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'sightsee',
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mysql',
    host: 'localhost',
  }
);

module.exports = sequelize;
