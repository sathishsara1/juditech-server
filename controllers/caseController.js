const accusedModel = require("../models/accusedModel");
const advocateModel = require("../models/advocateModel");
const petitionerModel = require("../models/petitionerModel");
const caseModel = require("../models/caseModel");
const opponentModel = require("../models/opponentModel");
const userModel = require("../models/userModel")
const addCaseByClient = async (req, res) => {
    const { petitioner, accused, opponent, user, firCopyUrl, signatureUrl, description } = req.body;
    try {
        const tmpCaseID = `tmp${Math.floor(1000 + Math.random() * 9000)}`;
        const newPetitioner = new petitionerModel(petitioner);
        await newPetitioner.save();
        const newAccused = new accusedModel(accused);
        await newAccused.save();
        const newOpponent = new opponentModel(opponent);
        await newOpponent.save();
        const newCase = new caseModel({
            caseNumber: tmpCaseID,
            petitioner: newPetitioner._id,
            accused: newAccused._id,
            opponent: newOpponent._id,
            userAdded: user._id,
            firCopyUrl : firCopyUrl,
            signatureUrl : signatureUrl,
            caseDescription : description
        });
        await newCase.save();
        const currentUser = await userModel.findById(user._id);
        if (currentUser) {
            currentUser.casesAdded.push(newCase._id);
            await currentUser.save();
        }

        res.status(201).json({ message: 'Case created successfully', caseID: tmpCaseID, case : newCase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = addCaseByClient;