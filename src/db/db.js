const { Sequelize } = require('sequelize');
const config = require('config');
require('dotenv').config();

const db = new Sequelize(
	'postgres://noevone94:QtSzmfe82MLX@ep-round-brook-21911542-pooler.us-east-2.aws.neon.tech/neondb',
	{
		dialect: 'postgres',
		dialectOptions: {
			ssl: true,
		},
	},
);
/* 	'postgres://noevone94:QtSzmfe82MLX@ep-round-brook-21911542-pooler.us-east-2.aws.neon.tech/neondb',
			{
				dialect: 'postgres',
				dialectOptions: {
					ssl: true,
				},
			}, */
module.exports = db;
