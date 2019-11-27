const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('regex', 'regex_user', 'test12345', {
  host: 'localhost',
  dialect: 'mysql'
});

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});

module.exports = User;