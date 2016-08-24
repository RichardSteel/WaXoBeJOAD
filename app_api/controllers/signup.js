var mongoose = require('mongoose');
var Coach = mongoose.model("Coach");

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

/* GET home page */

module.exports.coachArea = function(req,res,next) {
	//Get Coach details
	console.log("In app_api signup.js");
};
