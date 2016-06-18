/* GET home page */
module.exports.archeryInfo = function(req,res,next) {
	res.render('info', { title: 'JOAD Information' });
};