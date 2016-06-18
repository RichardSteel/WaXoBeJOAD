/* GET home page */
module.exports.studentInfo = function(req,res,next) {
	res.render('archer', {
		joad: 'Junior Olympic Archery Development',
		title: 'Student archer information',
		sessions: [
			{
				location: 'beginner1',
				title: 'Beginner Session 1',
				time: '3:30pm'
			},{
				location: 'beginner2',
				title: 'Beginner Session 2',
				time: '4:30pm'				
			},{
				location: 'advanced1',
				title: 'Advanced Session',
				time: '5:30pm'				
			}
		],
		students: [{
			id: 1,
			name: 'Alex Steel',
			level: 'Junior',
			style: 'Recurve',
			joad_rank: 7,
			scores: [
			{
				date: '1/12/2016',
				score: 200
			},{
				date: '2/13/2016',
				score: 210
			},{
				date: '3/14/2016',
				score: 220
			}
			]
		},{
			id: 2,
			name: 'Nick Steel',
			level: 'Cadet',
			style: 'Compound',
			joad_rank: 5,
			scores: [
			{
				date: '1/1/2015',
				score: 123
			},{
				date: '2/22/2015',
				score: 245
			}
			]
		},{
			id: 3,
			name: 'Raymond Chui',
			level: 'Junior',
			style: 'Recurve',
			joad_rank: 8,
			scores: [
			{
				date: '1/1/2015',
				score: 123
			},{
				date: '2/22/2015',
				score: 245
			},{
				date: '2/23/2015',
				score: 255
			},{
				date: '4/22/2015',
				score: 260
			},{
				date: '2/22/2016',
				score: 265
			},{
				date: '4/22/2015',
				score: 275
			}
			]
			
		}
		]
	});
};