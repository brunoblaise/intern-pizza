const { DataTypes } = require('sequelize');
const db = require('../db.js');

const User = db.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' },
	name: { type: DataTypes.STRING, allowNull: false },
	email: { type: DataTypes.STRING, allowNull: false, unique: true },
	password: { type: DataTypes.STRING, allowNull: false },
	
});

module.exports = User;
