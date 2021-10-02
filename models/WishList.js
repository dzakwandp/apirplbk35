const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    publish: {
        type: String,
        required: true
    },
    tahun: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('WishList', gameSchema);