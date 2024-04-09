const express = require("express") 
const Router = express.Router();
const addCaseByClient = require("../controllers/caseController");
const {userProfileEdit, userSettings, addAdvocate } = require("../controllers/userEdits");
Router.post("/addcasebyclient",addCaseByClient);
Router.post("/userprofileedit", userProfileEdit);
Router.post("/addAdvocate", addAdvocate)
Router.post("/usersetting", userSettings);
module.exports = Router;