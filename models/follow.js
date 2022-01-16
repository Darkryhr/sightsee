const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Follow = sequelize.define('follow', {
  vacationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Follow;
