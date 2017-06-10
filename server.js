/*Here is where you set up your server file.
express middleware.
*/

//Required npm packages 
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

//set PORT to recognize local port and heroku port
var PORT = process.env.PORT || 3000; 

//app instance 
var app = express(); 

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static(__dirname + '/public'));

//parse application 
app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having  ?_method=UPDATE
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


//import routes and give the server access to them.. points to burgers_controller.js
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/update', routes);
app.use('create', routes);

app.listen(PORT, function() {
	console.log("listening on PORT " + PORT);
});

