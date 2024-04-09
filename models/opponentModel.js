const mongoose = require("mongoose");

const opponentSchema = new mongoose.Schema({
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
    email: { type: String },
    signatureFile: { type: String } 
});

const opponentModel = mongoose.model("Opponent", opponentSchema);

module.exports = opponentModel;
