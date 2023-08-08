const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const db = require('./src/db/db.js');
async function start() {
	try {
		await db.authenticate();
		db.sync({ alter: true });
		app.get('/', (req, res) => {
			res.send('Hello World');
		});
		app.use('/', require('./app.js'));

		app.listen(PORT, () => {
			console.log(`App listening on PORT: ${PORT}`);
		});
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

start();
