const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phNumber: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    casesAdded: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cases"
    }],
    myLawyers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "advocates"
    }],
    dp : {
        type : String,
        default : ''
    },
    notification : {
        type : String,
        default : 'on'
    }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
