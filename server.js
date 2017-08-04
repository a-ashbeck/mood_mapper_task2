// Require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var Promise = require('bluebird');
var autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Set the port
var PORT = process.env.PORT || 3000;

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup static directory
app.use(express.static(__dirname + '/public'));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Database configuration with mongoose
mongoose.connect(
	'mongodb://heroku_w006fnbm:i845eva38bsklghq4g5chdtdi6@ds137183-a0.mlab.com:37183,ds137183-a1.mlab.com:37183/heroku_w006fnbm?replicaSet=rs-ds137183'
);
var db = mongoose.connection;

// Initialize aut-increment
autoIncrement.initialize(db);

// Show any mongoose errors
db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Listen on port 3000
app.listen(PORT, function() {
  console.log('App running on port ' + PORT);
});

// Require routes from controller
require('./controllers/controller.js')(app);
