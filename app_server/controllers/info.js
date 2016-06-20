/* GET home page */
module.exports.archeryInfo = function(req,res,next) {
	res.render('info', {
		title: 'JOAD Information',
		title_who: {
			main: 'Who we are'
			,detail: 'WaXoBe JOAD is New Jersey\'s largest and most successful JOAD club.\nSince it\'s founding more than 10 years ago, it has grown, through the addition of numerous level 2 and level 3 coaches, into a very successful program which currently teaches in excess of 70 students per week'
			,coaches : [
			{
				name: 'John Nyberg',
				level: 4
			},{
				name: 'KC Chiu',
				level: 3		
			},{
				name: 'Eddy Lam',
				level: 3						
			}
			]
		},
		title_what: {
			main: 'What we do',
			detail: 'We teach the sport of archery, mainly recurve, but also compound, to children and young adults aged 8 to 18. We focus on the NTS method of teaching and our lessons last one hour and start with a warm-up practice conducted by some of our more experienced and competitive archers. This is followed by  shooting practice which is observed by both the coaches and the advanced students. Occasionally, a single student or small group is taken to one side for a specific teaching lesson before they move back into shooting practice. Our teaching session lasts 8 weeks and we have 4 sessions in a year. After the fourth week of a session we hold a 300 round shoot and the student\’s score is recorded. It is through these 300 shoots that the student can earn JOAD achievement pins. Two shoots are required to obtain a pin, so students can get one pin per session, if their scores are high enough.'
		},
		title_why: {
			main: 'Why we do it',
			detail: 'Because we love the sport and want to encourage young archers to achieve their dreams'
		},
		title_how: {
			main: 'How we do it',
			detail: 'Instruction, practice, practice, practice'
		}
	});
};