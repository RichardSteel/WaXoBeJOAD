var mongoose = require( 'mongoose' );
var gracefulShutdown;

//console.log ("NODE_ENV is " + process.env.NODE_ENV);
//console.log ("MONGOLAB_URI is " + process.env.MONGOLAB_URI);

//var dbURI = 'mongodb://localhost/JOADDB';
var dbURI = 'mongodb://localhost/WaXoBeJOAD';
//var dbURI = 'mongodb://localhost/WaXoBeJOADDB';
//var dbURI = 'mongodb://Richard:Joe_1990@ds061355.mlab.com:61355/heroku_vblbgpbq';

if (process.env.NODE_ENV === 'production') {
	
	dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);

//mongodb://Richard:Joe_1990@ds061355.mlab.com:61355/heroku_vblbgpbq

var readline = require ("readline");
if (process.platform === "win32") {
	var rl = readline.createInterface ({
		input: process.stdin,
		output: process.stdout
	});
	rl.on ("SIGINT", function () {
		process.emit ("SIGINT");
	});
	rl.on ("SIGTERM", function () {
		process.emit ("SIGTERM");
	});
}

mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
}

//For nodemon restart
process.once('SIGUSR2', function () {
	gracefulShutdown('nodemon restart', function () {
		process.kill(process.pid, 'SIGUSR2');
	});
});
//For app termination
process.on('SIGINT', function () {
	gracefulShutdown('app termination', function () {
		process.exit(0);
	});
});
//For Heroku termination
process.on('SIGTERM', function () {
	gracefulShutdown('Heroku app shutdown', function () {
		process.exit(0);
	});
});

require('./students');
require('./sessions');
