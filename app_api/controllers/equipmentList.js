//This runs the query against the Equipment table
var mongoose = require('mongoose');
var Equipment = mongoose.model("equipment");

var sendJsonResponse = function(res, status, content) {
	#console.log("DB error");
	res.status(status);
	res.json(content);
};

// Get equipment from DB
// Sort by style descending (recurve first)
// Then by level descending (beginners first)
// Then by category and price
module.exports.equipmentList = function(req,res,next) {
	#console.log("In app_api/controllers/equipment.js");
	Equipment
		.find()
		.sort({style:-1,level:-1,category:1,price:1})
		.exec(function(err, session) {
			sendJsonResponse(res, 200, session);
		});
};
