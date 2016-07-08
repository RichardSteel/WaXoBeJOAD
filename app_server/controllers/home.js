/* GET home page */
module.exports.landing = function(req,res,next) {
	res.render('home', {
		title: 'JOAD Home Page',
		details: {
			title: 'JOAD',
			club: 'WaXoBe, New Jersey',
			title_long: 'Junior Olympic Archery Development',
			waxobe: 'WaXoBe archers of South Brunswick, NJ, hosts a JOAD program for kids aged 8 to 18 at our indoor range, on a Saturday afternoon, from October through to June.',
			bloomfield: 'During the hot and humid summer months, we move to Bloomfield archers for some outdoor field archery.'
		},
		links: [{
			name: 'WaXoBe',
			url: 'http://www.waxobe.com/'
		},{
			name: 'LAS',
			url: 'http://www.lancasterarchery.com/'
		},{
			name: 'FaceBook',
			url: 'https://www.facebook.com/groups/WaXoBeJOAD/'
		},{
			name: 'USA Archery',
			url: 'http://www.teamusa.org/USA-Archery/'
		},{
			name: 'CNN',
			url: 'http://www.cnn.com/'
		}
		]
		}
	);
};