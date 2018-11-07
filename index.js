var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const pug = require('pug');

var shipClass = 0;

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
  host: "localhost",
  database: "swc",
  user: "root",
  password: "localhost",
  insecureAuth : true
});

con.connect(function(err) {
 	if (err) throw err;
  	console.log("Connected!");
});


// TEST QUERY FOR DATABASE
con.query('SELECT * FROM shipTypes', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

// Routes for site. Likely refactor later into separate files.
app.get("/", function(req,res){
	con.query('SELECT * FROM shipTypes ORDER BY name ASC', function (error, results, fields) {
	if (error)
		throw error;
	res.render("home", {results: results, shipClass: shipClass});
	});
});

app.post("/", function(req,res){
  shipClass = req.body.shipclass
  con.query('SELECT * FROM shipTypes ORDER BY name ASC', function (error, results, fields) {
  if (error)
    throw error;
  res.render("home", {results: results, shipClass: shipClass});
  });
});

// listner for server start
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

