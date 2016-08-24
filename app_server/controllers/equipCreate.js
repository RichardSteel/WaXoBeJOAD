
module.exports.equipCreate = function(req,res,next) {
	Equipment.create({
		name: req.body.name,
		price: req.body.price,
		url: req.body.url,
		level: req.body.level,
		style: req.body.style,
		category: req.body.category,
		rating: req.body.rating,
	}, function(err, equipment) {
		if (err) {
			sendJsonResponse(res, 400, err);
		} else {
			sendJsonResponse(res, 201, equipment);
		}
	}
	);
};
