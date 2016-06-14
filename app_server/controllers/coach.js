/* GET home page */
module.exports.coachLogin = function(req,res,next) {
	res.render('index', { title: 'Coach login' });
};