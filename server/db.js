const Sequelize = require('sequelize');
const sequelize = new Sequelize('work-out-log', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('This is working.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  

  module.exports = sequelize;