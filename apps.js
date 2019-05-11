//dependencies

var express = require("express");
var path = require("path");
// var bodyParser = require('body-parser');

//set up express
var app = express();
var PORT = process.env.PORT || 3000;
console.log("Listening on PORT "+ PORT)

//set up the express app the handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// app.use(bodyParser.text());

//routes
//basic route that sents user first to the ajax page
app.get("/", function(req, res){
    console.log("homepage requested");
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res){
    console.log("table page requested");
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
    console.log("reserve page requested");
    res.sendFile(path.join(__dirname,"reserve.html"));
});


//adding new reservations (DATA)

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

app.get('/api/tables', function (req, res) {
    // console.log('table data requested');
    // var response = "testing";
    res.json(reservation);
  });


//add new reso
app.post("", function(req, res){
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    reservation.push(newReservation);
    res.json(newReservation);
});



app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});