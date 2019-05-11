//dependencies

var express = require("express");
var path = require("path");

//set up express
var app = express();
var PORT = process.env.PORT || 3000;
console.log("Listening on PORT "+ PORT)

//set up the express app the handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//routes
//basic route that sents user first to the ajax page
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});


//adding new reservations

var reservation = [
    {
        routeName: "tony",
        name: "Tony",
        phoneNumber: "9371231234",
        email: "tony.tony@tony.com",
        uniqueId: "54321",
    },
    {
        routeName: "danielle",
        name: "Danielle",
        phoneNumber: "9081231234",
        email: "danielle.danielle@danielle.com",
        unique: "12345",
    },
];
