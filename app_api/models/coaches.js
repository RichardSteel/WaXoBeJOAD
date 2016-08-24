var mongoose = require( 'mongoose' );

//Coach schema
var coachSchema = new mongoose.Schema({
	coachName: {type: String, required: true},
	coachLevel: Number,
	password: {type: String, required: true, "default" : "Joad42"}
});

mongoose.model('Coach', coachSchema);
