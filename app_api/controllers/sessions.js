var mongoose = require('mongoose');
var Session = mongoose.model("Session");

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

// API will return all session information from the database
module.exports.getAllSessions = function (req, res, next) {
	console.log("In get session");
	Session
		.find()
		.exec(function(err, session) {
			sendJsonResponse(res, 200, session);
		});
};