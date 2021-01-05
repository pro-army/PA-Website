const mongoose = require("mongoose");
// Using mongoose-float for cgpa
const Float2 = require("mongoose-float").loadType(mongoose, 2);

const schemaOptions = {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const TestSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        email: {
            type: String,
            required: true,
            match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        },
        password: {
            type: String,
            required: true,
        },
    },
    schemaOptions
);

module.exports = mongoose.model("Test", TestSchema);
