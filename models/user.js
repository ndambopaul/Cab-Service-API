const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        minLength: 5,
        maxLength: 100,
        unique: true
    },
    first_name: {
        type: String,
        minLength: 5,
        maxLength: 100
    },
    last_name: String,
    username: String,
    phone_number: String,
    password: String,
    role: {
        type: String,
        enum: ["driver", "passenger", "admin"],
        default: "passenger",
    },
    is_active: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);