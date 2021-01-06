// Import the necessary packages
const mongoose = require("mongoose");

// Create Schema for Article
const TodoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Article", TodoSchema);
