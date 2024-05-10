const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    currentLocation: {
        type: { type: String, default: "Point" },
        coordinates: [Number], // longitude, latitude
    },
    /*
    currentLocation: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            index: "2dsphere"
        }},
    */
    status: {
        type: String,
        enum: ["deactivated", "pending", "suspended"],
        default: "pending"
    },
    rating: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Driver", DriverSchema)