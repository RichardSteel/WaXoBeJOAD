var mongoose = require( 'mongoose' );

//Define the schema for an archery shoot. All fields are required.
//All measurements are metric
var studentScore = new mongoose.Schema({
	shootDate: {type: Date, required: true},
	score: {type: Number, required: true},
	distance: {type: Number, required: true, "default": 18},
	targetSize: {type: Number, required: true, "default": 40}
});

//Define the schema for a student. Each student has zero or more scores
var studentSchema = new mongoose.Schema({
	fName: {type: String, required: true},
	lName: {type: String, required: true},
	dob: {type: Date, required: true},
	style: {type: String, enum: ["Recurve","Compound"], "default": "Recurve"},
	level: {type: String},
	rating: {type: Number},
	session: Number,
	shootScores: [studentScore],
	sex: {type: String, enum: ["M", "F"] }
});

mongoose.model('Student', studentSchema);
