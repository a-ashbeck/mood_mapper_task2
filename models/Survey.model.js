var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

// Define Survey schema
var SurveySchema = new Schema({
    emotionRank: {},
    Tense: { type: Number },
    Nervous: { type: Number },
    Stressed: { type: Number },
    Upset: { type: Number },
    Alert: { type: Number },
    Excited: { type: Number },
    Elated: { type: Number },
    Happy: { type: Number },
    Sad: { type: Number },
    Depressed: { type: Number },
    Bored: { type: Number },
    Contented: { type: Number },
    Serene: { type: Number },
    Relaxed: { type: Number },
    Calm: { type: Number }
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
