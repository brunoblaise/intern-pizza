const { Sequelize } = require('sequelize');
require('dotenv').config();
const db = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: process.env.DIALECT,
});



module.exports = db;