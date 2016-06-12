/* GET home page */
module.exports.index = function(req,res,next) {
	res.render('index', { club: 'WaXoBe', title: 'JOAD', title_long: 'Junior Olympic Archery Development' });
};