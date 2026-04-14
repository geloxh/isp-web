const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    link: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Promo', promoSchema);
