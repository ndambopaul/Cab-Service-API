const mongoose = require("mongoose");

const PassengerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    currentLocation: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            index: "2dsphere"
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Passenger", PassengerSchema);