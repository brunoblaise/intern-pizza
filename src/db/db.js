const { Sequelize } = require('sequelize');
const config = require('config');
require('dotenv').config();

const db = new Sequelize(process.env.DB_postgres, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: process.env.DB_DIALECT,
});

/* 	'postgres://noevone94:QtSzmfe82MLX@ep-round-brook-21911542-pooler.us-east-2.aws.neon.tech/neondb',
			{
				dialect: 'postgres',
				dialectOptions: {
					ssl: true,
				},
			}, */
module.exports = db;
