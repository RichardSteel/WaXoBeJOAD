var mongoose = require('mongoose');
var Student = mongoose.model("Student");

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

//API will get a single student by ID. Not tested yet!!!
module.exports.getOneStudent = function (req, res) {
	if (req.params && req.params.studentId) {
		var id = req.params.studentId;
		var searchStr = "{\"lName\" : \"" + id + "\"}";
		var query = Student.find();
		query.exec(function(err, student) {
			if (!student) {
				sendJsonResponse(res, 404, {
					"message": "studentId (" + id + ") not found"
				});
				return;
			} else if (err) {
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, student);
		});
	} else {
		sendJsonResponse(res, 404, {
			"message": "No studentId in request"
		});
	}
};

//API to get all students in alphabetical order by lastname and then firstname
module.exports.getAllStudents = function (req, res, next) {
	Student
		.find()
		.sort({lName:1,fName:1})
		.exec(function(err, student) {
			console.log(student._id);
			sendJsonResponse(res, 200, student);
		});
};