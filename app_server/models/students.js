var mongoose = require( 'mongoose' );

var studentScore = new mongoose.Schema({
	shootDate: {type: Date, required: true},
	score: {type: Number, min: 0, required: true},
	distance: {type: Number, min: 0, required: true},
	targetSize: {type: Number, min: 40, required: true}
});

var studentSchema = new mongoose.Schema({
	fName: {type: String, required: true},
	lName: {type: String, required: true},
	dob: Date,
	style: {type: String, enum: ["Recurve","Compound"], "default": "Recurve", required: true},
	level: {type: String},
	rating: {type: Number, "default": 0, min: 0, max: 8},
	session: Number,
	shootScores: [studentScore],
	sex: {type: String, enum: ['M','F'], required: true}
});

mongoose.model('Student', studentSchema);
