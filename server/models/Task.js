const Sequelize = require('sequelize');
const sequelize = require('./db');

// "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum explicabo quisquam in optio sequi non quam commodi saepe natus beatae consectetur, assumenda debitis adipisci amet asperiores deserunt et corporis eligendi esse quidem ut magni magnam. Blanditiis, maxime? Aspernatur, quam sit.",
// "regexp": "a+b*",
// "samples": [
//       "aaaaaaab",
//       "abbbbbb",
//       "hello",
//       "a"
//     ]

const Model = Sequelize.Model;
class Task extends Model {}
Task.init({
  // attributes
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  regexp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  samples: {
    type: Sequelize.JSON
  }
}, {
  sequelize,
  modelName: 'task'
  // options
});

module.exports = Task;