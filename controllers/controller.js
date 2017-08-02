// Require dependencies
var express = require('express');
var Survey = require('../models/Survey.model');

// Export controller defined routes
module.exports = function(app) {
    // Post function to add new survey
    app.post('/', function(request, response) {
        var survey = {
            surveyData: request.body
        }

        // if no survey is defined just return
        if (survey === '') {
            response.redirect('/');
            return;
        }
        console.log(survey);
        // Create the new survey in Survey
        Survey.create(survey, function(err, doc) {

            if (err) {
                console.log(err);
                res.redirect('/');
            }
        });
    })
};
