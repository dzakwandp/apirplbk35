const mongoose = require('mongoose');

const mobilSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    merk: {
        type: String,
        required: true
    },
    tahun: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mobil', mobilSchema);