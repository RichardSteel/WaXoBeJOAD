var mongoose = require('mongoose');
var Coach = mongoose.model("Coach");

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

// API will return all session information from the database
module.exports.getCoaches = function (req, res, next) {
	Coach
		.find()
		.exec(function(err, session) {
			sendJsonResponse(res, 200, session);
		});
};