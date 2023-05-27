/** ------------------ IMPORTING PACKAGE ------------------ **/
const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');
const DB = 'mongodb+srv://name:name@cluster0.uuvknk8.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;


//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

/** ------------------ EXPORTING DB ------------------ **/
module.exports = db;