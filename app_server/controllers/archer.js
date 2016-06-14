/* GET home page */
module.exports.studentInfo = function(req,res,next) {
	res.render('index', { title: 'Student Information' });
};