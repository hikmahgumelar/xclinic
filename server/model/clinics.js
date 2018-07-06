const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KlinikSchema = new Schema({
    nama: String,
    role: String

});

module.exports = mongoose.model('Klinik', KlinikSchema);
