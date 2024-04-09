const mongoose = require("mongoose");

const advocateSchema = new mongoose.Schema({
    username: {
        type : String
    },
    password : {
        type : String
    },
    name: { 
        type: String, 
        required: true 
    },
    role : {
        type : String,
        default : "advocate"
    },
    specialization: { 
        type: String 
    },
    chamberNo: { 
        type: String 
    },
    mobile: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    experience: { 
        type: Number 
    },
    myClients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    casesHandled : {
        type: Number
    },
    cases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cases"
    }],
    availableTimings: { 
        type: String 
    },
    rating: { 
        type: Number 
    },
    dp: { 
        type: String 
    }
});

const advocateModel = mongoose.model("Advocate", advocateSchema);

module.exports = advocateModel;
