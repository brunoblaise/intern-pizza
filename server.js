const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const db = require('./src/db/db.js');
const morgan = require('morgan');

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log('Error: ' + err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
