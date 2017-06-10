var express = require('express');
var router = express.Router();

//Import the model(burger.js) to use its database functions
var burger = require('../models/burger.js');

//app routes 
/**GET: retrieve's resource from the server**/
//Gets all the burgers and forms the index file by passing in the burger objects for handlebars to use 
router.get('/', function(req,res) {
	burger.findAll(function(burger_data){
		console.log(burger_data);
		res.render('index',{burger_data});
		})
})

/**PUT: update the resource on the server.**/
//Mark burger as devoured in database 
//Refresh page to move it to devoured list
router.put('/burgers/update', function(req,res){
	burger.update(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

/**POST: creates a resource on the server. **/
//Post new burger to database and refresh page to see it
router.post('/burgers/create', function(req,res){
	burger.create(req.body.burger_name, function(result){
		res.redirect('/');
	})
})

//Export routes for server.js to use
module.exports = router; 