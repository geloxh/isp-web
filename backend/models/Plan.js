const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    data: {
        type: String, // e.g., "10GB", "Unlimited"
        required: true
    },
    validity: {
        type: String, // e.g., "30 Days"
        required: true
    },
    features: [String], // e.g., ["Free Calls", "Free SMS"]
    isFeatured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Plan', planSchema);
