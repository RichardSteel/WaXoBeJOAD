var mongoose = require('mongoose');
var Coach = mongoose.model("Coach");

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

/* GET home page */
module.exports.coachArea = function(req,res,next) {
	//Get Coach details
	console.log("In app_server signup.js");
	var cName = req.body.user;
	var pWord = req.body.password;
	var query = Coach.findOne({"coachName" : cName});
	query.select();
	query.exec(function (err, coach) {
		if ( err ) {
			res.render('error', {
				message: 'Database error'
			});
		} else if (coach) {
			//console.log('%s %s', coach.coachName, coach.password);
			if ( pWord == coach.password ) {
				res.render('signin', {
					title: 'Private Coaches Area'
				});
			} else {
				res.render('error', {
				message: 'Invalid password - access denied'
				});
			}
		} else {
			res.render('error', {
				message: 'Error - coach name not recognized'
			});
		}
	});
};