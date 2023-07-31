const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres', 'postgres', 'Bruno123@#', {
  host: 'localhost',
  dialect:  'postgres',
})

module.exports = db;