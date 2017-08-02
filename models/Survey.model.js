var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

// Define Survey schema
var SurveySchema = new Schema({
    surveyData: {}
});
 
// Add the incrementer
SurveySchema.plugin(autoIncrement.plugin, {
    model: 'Survey',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});
 // Export the model
module.exports = mongoose.model('Survey', SurveySchema);
