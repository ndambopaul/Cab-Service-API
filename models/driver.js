const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ["deactivated", "pending", "suspended"],
        default: "pending"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Driver", DriverSchema)