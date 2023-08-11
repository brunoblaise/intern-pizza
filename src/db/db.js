require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('../utils/config');
const conf = `postgres:${config('password')}@localhost:5432`;

const proConfig = config('production.db_url');

const testConfig = config('production.db_url'); /* `postgres://${conf}/${config('test.database')}` */

const devConfig = `postgres://${conf}/${config('development.database')}`;

const db = new Sequelize(
	process.env.DB_URL,
	/* 	process.env.NODE_ENV === 'production'
		? proConfig
		: process.env.NODE_ENV === 'test'
		? testConfig
		: devConfig, */

	{
		dialect: 'postgres',
		dialectOptions: {
			ssl: true,
			/* process.env.NODE_ENV === 'production' ? true : false, */
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
