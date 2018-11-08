var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
<<<<<<< HEAD
<<<<<<< HEAD
const pug = require('pug');

=======
>>>>>>> parent of e25bdf2... Moving to pug instead of EJS
var shipClass = 0;
=======
>>>>>>> parent of 833fab5... Add selection for ships based on type

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
<<<<<<< HEAD
<<<<<<< HEAD
con.query('SELECT * FROM shipTypes', function (error, results, fields) {
=======
con.query('SELECT name FROM shipTypes WHERE class=2 ORDER BY name ASC', function (error, results, fields) {
>>>>>>> parent of e25bdf2... Moving to pug instead of EJS
    if (error)
        throw error;
=======
// con.query('SELECT * FROM factionTypes', function (error, results, fields) {
//     if (error)
//         throw error;
>>>>>>> parent of 833fab5... Add selection for ships based on type

//     results.forEach(result => {
//         console.log(result);
//     });
// });

// Routes for site. Likely refactor later into separate files.
app.get("/", function(req,res){
	con.query('SELECT * FROM characters', function (error, results, fields) {
	if (error)
		throw error;

	res.render("home", {results: results});
	});
});

// listner for server start
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

