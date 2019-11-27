const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('regex', 'regex_user', 'test12345', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;