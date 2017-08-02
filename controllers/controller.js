// Require dependencies
var express = require('express');
var Survey = require('../models/Survey.model');

// Export controller defined routes
module.exports = function(app) {
    // Post function to add new survey
    app.post('/', function(request, response) {
        var survey = {
            emotionRank: request.body.emotionRank,
            Tense: request.body.Tense,
            Nervous: request.body.Nervous,
            Stressed: request.body.Stressed,
            Upset: request.body.Upset,
            Alert: request.body.Alert,
            Excited: request.body.Excited,
            Elated: request.body.Elated,
            Happy: request.body.Happy,
            Sad: request.body.Sad,
            Depressed: request.body.Depressed,
            Bored: request.body.Bored,
            Contented: request.body.Contented,
            Serene: request.body.Serene,
            Relaxed: request.body.Relaxed,
            Calm: request.body.Calm
        }

        // if no survey is defined just return
        if (survey === '') {
            response.redirect('/');
            return;
        }
        console.log(request.body);
        // Create the new survey in Survey
        Survey.create(survey).then(function() {
            response.redirect('/');
        }).catch(function(err) {
            console.log(err);
        });
    })
};
