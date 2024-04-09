const express = require("express");
const Router = express.Router();
const {userRegistration, advocateRegistration} = require("../controllers/registerController");
const {userLogin, getUserDetails, getAllAdvocates, getAllCases} = require("../controllers/loginController");

Router.post("/login",userLogin);
Router.get("/getalladvocates",getAllAdvocates);
Router.get("/getallcases",getAllCases);
Router.post("/newRegistration", userRegistration);
Router.post("/advocateRegistration",advocateRegistration)
Router.post("/getuserDetails",getUserDetails);
module.exports = Router;