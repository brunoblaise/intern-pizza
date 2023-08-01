const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const db = require('./src/db/db.js');

app.use(express.json());

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log('Error: ' + err));
db.sync({ force: true });
console.log('All models were synchronized successfully.');
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', require('./app.js'));

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
