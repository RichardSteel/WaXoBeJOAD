var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === '__production') {
	apiOptions.server = "https://secret-ravine-23938.herokuapp.com/";
}

apiOptions.server = "https://secret-ravine-23938.herokuapp.com/";

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

var renderEquipmentList = function(req, res, equipment) {
	res.render('equipment', {
		joad: 'Junior Olympic Archery Development',
		title: 'Equipment',
		areas: [ 'Recurve', 'Compound' ],
		gear: equipment
	});
};

module.exports.equipmentList = function(req,res,next) {
	var requestOptions, path;
	path = '/api/equipmentList';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {}
	};
	//TODO: Need to handle errors.
	request(
		requestOptions,
		function(err, response, bodyEquipment) {
			renderEquipmentList(req, res, bodyEquipment);
		}
	);
};
