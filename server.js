//Required npm packages 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 3000; 

var app = express(); 

//Serve static content for the app from the "public" directory in the application directory
//*cwd=current working directory**// the directory from which you invoked the node command 
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having  ?_method=UPDATE
app.use(methodOverride("_method"));

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give the server access to them 
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function() {
	console.log("listening on PORT " + port);
});