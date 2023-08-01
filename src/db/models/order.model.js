const db = require('../db.js');
const Sequelize = require('sequelize');
const Order = db.define('order', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
    approved: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Reject' },
	userId: { type: Sequelize.INTEGER, allowNull: false },
	pizzaId: { type: Sequelize.INTEGER, allowNull: false },
	quantity: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Order;
