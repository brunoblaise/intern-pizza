"use strict";
require('dotenv').config();
const config = require('config');

module.exports = function (paremeter) {
	return config.get(paremeter);
};
