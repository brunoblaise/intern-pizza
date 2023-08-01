const Sequelize = require('sequelize');
const db = require('../db.js');

const Pizza = db.define('pizza', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: { type: Sequelize.STRING, allowNull: false },
	description: { type: Sequelize.STRING, allowNull: false },
	price: { type: Sequelize.INTEGER, allowNull: false },
	available: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
	image: { type: Sequelize.STRING, allowNull: false },
});

module.exports = Pizza;
