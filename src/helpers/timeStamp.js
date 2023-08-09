module.exports = function () {
	const timeStamp = new Date().toLocaleString('en-US', {
		timeZone: 'Africa/Kigali',
	});
	return timeStamp;
};
