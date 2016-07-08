var mongoose = require( 'mongoose' );

//Session schema
var sessionSchema = new mongoose.Schema({
	sessionTitle: {type: String, required: true},
	sessionId: {type: Number, min: 1, required: true},
	sessionStart: Number,
	sessionDurn: Number,
	sessionDOW: { type: String,
                  enum: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				  default: 'Saturday'
				}
});

mongoose.model('Session', sessionSchema);
