const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClinicsSchema = new Schema({
    name: String,

});

module.exports = mongoose.model('Clinics', ClinicsSchema);
