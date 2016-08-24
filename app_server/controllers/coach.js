/* GET home page */

module.exports.coachLogin = function(req,res,next) {
	res.render('coach', { title: 'Coach login' });
};
