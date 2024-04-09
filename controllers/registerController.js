const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const advocateModel = require("../models/advocateModel");
const nodemailer = require("nodemailer");
const caseModel = require("../models/caseModel")
const userRegistration = async (req, res) => {
    const { email, name, password, phNumber, role } = req.body; 
    try {
        const match = await userModel.findOne({ email: email });
        if (match) {
            res.json({ message: "User Already Registered, Please Log In!", status: true });
        } 
        else {
            try {
                const userAdded = new userModel({
                    name: name,
                    email: email,
                    password: password,
                    phNumber: phNumber,
                    role: role
                });
                await userAdded.save();
                res.json({ message: "Successfully Registered, Please Log In!", status: true });
                console.log(userAdded)
            } catch (error) {
                res.json({ message: error, status: false });
            }
        }
    } catch (error) {
        res.json({ message: "Some error occurred", status: false });
    }
}

const advocateRegistration = async (req, res) => {
    const { advocate, role } = req.body;
    try {
        const match = await advocateModel.findOne({ email: advocate.email });
        if (match) {
            res.json({ message: "User Already Registered, Please Log In!", status: false });
        } else {
            try {
 
                const generateRandomString = (length) => {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let result = '';
                    for (let i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                    return result;
                };
                const randomPassword = generateRandomString(8); 

    
                const username = advocate.email;

                const userAdded = new advocateModel({
                    ...advocate,
                    username : username, 
                    password: randomPassword, 
                });

             
                const cases = await caseModel.find({ caseNumber: { $in: advocate.cases } });
                userAdded.cases = cases.map((c) => c._id);

                await userAdded.save();
                res.json({ message: "Successfully Registered, Please Log In!", status: true, user : userAdded });
                console.log(userAdded);
            } catch (error) {
                res.json({ message: error.message, status: false });
            }
        }
    } catch (error) {
        res.json({ message: "Some error occurred", status: false });
    }
};


module.exports = {userRegistration, advocateRegistration};
