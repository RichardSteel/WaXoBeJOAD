var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === '__production') {
	apiOptions.server = "https://secret-ravine-23938.herokuapp.com/";
}

apiOptions.server = "https://secret-ravine-23938.herokuapp.com/";

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
	var requestOptions1, requestOptions2, path1, path2;
	var err1, err2, response1, response2;
	path1 = '/api/sessions';
	requestOptions1 = {
		url : apiOptions.server + path1,
		method : "GET",
		json : {},
		qs : {}
	};
	//TODO: Need to handle errors.
	//console.log("Point 1");
	request(
		requestOptions1,
		function(err1, response2, bodySessions) {
			//Now get the students
			//console.log("Point 2");
			path2 = '/api/students';
			//console.log("Point 2.1");
			requestOptions2 = {
				url : apiOptions.server + path2,
				method : "GET",
				json : {},
				qs : {}
				};
			//console.log("Point 2.2");
			request(
				requestOptions2,
				function(err2, response2, bodyStudents) {
					//console.log("app_server\controllers\archer.js Render Archer scores");
					renderArcherScores(req, res, bodySessions, bodyStudents);
				}
			);
		}
	);
};