// Require dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var db = require('./models');

// Server setup variables
var app = express();
var PORT = process.env.PORT || 8000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Require the routes set in controller.js
require('./controllers/controller.js')(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
}).catch(function(err) {
    console.log(err);
});
