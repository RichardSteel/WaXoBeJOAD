var mongoose = require( 'mongoose' );

//Coach schema
var equipmentSchema = new mongoose.Schema({
	name: {type: String, required: true},
	price: Number,
	url: String,
	level: String,
	style: String,
	category: String,
	rating: { type: Number, min: 0, max: 5}
});

mongoose.model('equipment', equipmentSchema);
