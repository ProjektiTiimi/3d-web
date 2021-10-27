const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    YTunnus: {
        type: String,
        required: true
    },
    asiakkaanNimi: {
        type: String,
        required: true
    },
    Postitusosoite: {
        type: String,
        required: true
    },
    Postinumero: {
        type: Number,
        required: true
    },
    Toimipaikka: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('customers', CustomerSchema);