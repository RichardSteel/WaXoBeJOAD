/* GET home page */
module.exports.archeryInfo = function(req,res,next) {
	res.render('index', { title: 'JOAD Information' });
};