const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sathishsara1007:Sathish%40111@cluster0.v4wksuk.mongodb.net/juditech?retryWrites=true&w=majority")
const db = mongoose.connection
db.on("error", () => { console.log("Error connection to db") });
db.once("open", () => { console.log("Successfully connected to database") });

module.exports = db;