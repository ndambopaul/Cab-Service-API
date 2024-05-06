const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    },
    starting_point: Object,
    destination: Object,
    trip_cost: Number,
    status: {
        type: String,
        enum: ["waiting", "cancelled", "completed"],
        default: "waiting"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Trip", TripSchema);