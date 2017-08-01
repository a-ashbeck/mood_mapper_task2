// Require dependencies
var express = require('express');
var db = require('../models');

// Export controller defined routes
module.exports = function(app) {
    // Post function to add new survey
    app.post('/', function(request, response) {
        var survey = request.body;
        // if no survey is defined just return
        if (survey === '') {
            response.redirect('/');
            return;
        }
        // Create the new survey in DB
        db.Survey.create({
            q1: survey.q1,
            q2: survey.q2,
            q3: survey.q3,
            q4: survey.q4
        }).then(function() {
            response.redirect('/');
        }).catch(function(err) {
            console.log(err);
        });
    })
};
