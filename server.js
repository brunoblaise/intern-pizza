const express = require('express');
const app = express();
const server = require('./app.js');

const PORT = process.env.PORT || 5000;
const db = require('./src/db/db.js');

//FIXME: the problem of test not getting the url
//FIXME: gmail in services throwing error

//FIXME: test not working
//TODO: add more tests

//NOTE:

db.authenticate();
//db.sync();
app.get('/', async (req, res) => {
	try {
		res.status(200).json({ greeting: 'Hello there!' });
	} catch (err) {
		res.status(500).send(err);
	}
});
app.use('/', server);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
