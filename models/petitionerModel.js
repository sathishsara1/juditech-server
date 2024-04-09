const mongoose = require("mongoose");

const petitionerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    relationship: { type: String },
    aadhar: { type: String },
    gender: { type: String },
    pincode: { type: String },
    nationality: { type: String },
    dob: { type: Date },
    age: { type: Number },
    mobile: { type: String },
    email: { type: String },
    actSection: { type: String },
    policeStation: { type: String },
    courtFeePaid: { type: String },
    firNo: { type: String },
    address: { type: String, required: true },
});

const petitionerModel = mongoose.model("Petitioner", petitionerSchema);

module.exports = petitionerModel;
