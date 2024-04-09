const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    userAdded: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    caseNumber: { type: String, required: true },
    caseDescription : { type : String, required : true},
    firCopyUrl : { type : String , required : true, default: ''},
    numberOfHearings: { type: Number, default: 0 },
    nextHearingDate: { type: String, default : '' },
    type: { type: String, default: 'partial' },
    allHearingDates: [{ type: Date }],
    accused: { type: mongoose.Schema.Types.ObjectId, ref: 'Accused' },
    petitioner: { type: mongoose.Schema.Types.ObjectId, ref: 'Petitioner' },
    opponent: { type: mongoose.Schema.Types.ObjectId, ref: 'Opponent' },
    advocate: { type: mongoose.Schema.Types.ObjectId, ref: 'Advocate' },
    signatureUrl : { type : String, default:'' }
});

const caseModel = mongoose.model("cases", caseSchema);

module.exports = caseModel;
