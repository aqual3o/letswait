const letswait = {};

letswait.forMSeconds = function (time) {
	return new Promise (function (resolve, reject) {
		if (isNaN (time))
			return reject (new Error ('time is not a number'));
		setTimeout (resolve, time);
	});
};

letswait.forSeconds = function (time) {
	return new Promise (function (resolve, reject) {
		if (isNaN (time))
			return reject (new Error ('time is not a number'));

		const timeInMilli = time * 1000;
		setTimeout (resolve, timeInMilli );
	});
};

module.exports = letswait;
