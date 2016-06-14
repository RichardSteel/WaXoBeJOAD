/* GET home page */
module.exports.landing = function(req,res,next) {
	res.render('home', { title: 'JOAD Home Page', club: 'WaXoBe, New Jersey', title_long: 'Junior Olympic Archery Development hosted by WaXoBe and Bloomfield Archers' });
};