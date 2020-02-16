var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

// Routes for site. Likely refactor later into separate files.
app.get("/", function(req,res){
	res.render("home")
})
app.get("/add", function(req,res){
	res.render("addListing")
})


// listner for server start
app.listen(3000, process.env.IP, function(){
    console.log("Server has started");
});