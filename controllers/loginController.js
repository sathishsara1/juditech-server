const userModel = require("../models/userModel");
const advocateModel = require("../models/advocateModel");
const caseModel = require("../models/caseModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userLogin =  async (req,res) =>{
    const { email, password,  role } = req.body; 
    try {
        const user = await userModel.findOne({ email, role, password });
        if (user) {
            if (user) {
                const token = jwt.sign({
                    id: user._id,
                    name: user.name,
                    email: email,
                    phNumber: user.phNumber
                }, "VizianagaramJillaCourt", { expiresIn: "1hr" });
                res.json({ message: "Successfull login!", status: true, user: token, data: user });
            } else {
                res.json({ status: false, message: 'Invalid password' });
            }
        } else {
            res.json({ status: false, message: 'Invalid email or role' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ status: false, message: 'Server error' });
    }
}

const getUserDetails = async(req, res) => {
    const { token } = req.body;
    const decodedToken = jwt.decode(token, "VizianagaramJillaCourt");
    const userDetails = await userModel.findOne({ email: decodedToken.email }).populate({
        path: 'casesAdded',
        populate: {
            path: 'accused petitioner opponent'
        }
    }).exec();
    res.json({ message: "User Details Fetched", userDetails: userDetails, status : true });
}

const getAllAdvocates = async (req, res) => {
    try {
        const advocates = await advocateModel.find();
        res.json({ success: true, data: advocates });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getAllCases = async (req, res) => {
    try {
        const cases = await caseModel.find();
        res.json({ success: true, data: cases });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
module.exports = {userLogin,getUserDetails,getAllAdvocates, getAllCases};