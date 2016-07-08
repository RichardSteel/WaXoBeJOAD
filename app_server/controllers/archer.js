var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = "https://secret-ravine-23938.herokuapp.com/";
}

var renderArcherScores = function(req, res, responseBodySessions, responseBodyStudents) {
	res.render('archer', {
		joad: 'Junior Olympic Archery Development',
		title: 'Student archer information',
		sessions: responseBodySessions,
		students: responseBodyStudents
	});
};

/* GET home page */
module.exports.studentInfo = function(req,res,next) {
	var requestOptions, path;
	path = '/api/sessions';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {}
	};
	//TODO: Need to handle errors.
	request(
		requestOptions,
		function(err, response, bodySessions) {
			//Now get the students
			path = '/api/students';
			requestOptions = {
				url : apiOptions.server + path,
				method : "GET",
				json : {},
				qs : {}
				};
			request(
				requestOptions,
				function(err, response2, bodyStudents) {
					renderArcherScores(req, res, bodySessions, bodyStudents);
				}
			);
		}
	);
};