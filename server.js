const express = require("express");
const app = express();
app.use(express.json());

const db = require("./database/dbConnection.js");
const cors = require("cors");
app.use(cors());
const authenticationRouting = require("./api/authentication.js");
const userUploads = require("./api/userUploads.js");
app.use("/api/authenticate/", authenticationRouting);
app.use("/api/userupload/", userUploads);
app.listen(5000,()=>{
    console.log("Server running on port 5000");
})