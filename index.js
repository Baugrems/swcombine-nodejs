var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

// Routes for site. Likely refactor later into separate files.
//hardcode username for now
app.get("/", function(req,res){
	res.render("home");
})
app.get("/market", function(req,res){
	res.render("market", {title: "Noctis"});
})
app.get("*", function(req,res){
	res.render("error");
})

// listner for server start
app.listen("8080", "127.0.0.1", function(){
    console.log("Server has started");
});