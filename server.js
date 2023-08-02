const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const db = require('./src/db/db.js');

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log('Error: ' + err));
//d//b.sync({ force: true });
app.use('/', require('./app.js'));

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
