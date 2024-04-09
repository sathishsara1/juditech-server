const mongoose = require("mongoose");

const accusedSchema = new mongoose.Schema({
    name: { type: String, required: true },
    relationship: { type: String },
    address: { type: String, required: true },
    aadhar: { type: String },
    gender: { type: String },
    pincode: { type: String },
    nationality: { type: String },
    dob: { type: Date },
    age: { type: Number },
    mobile: { type: String },
    email: { type: String }
});

const accusedModel = mongoose.model("Accused", accusedSchema);

module.exports = accusedModel;
