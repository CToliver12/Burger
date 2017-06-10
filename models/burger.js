//Import the ORM to create the functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
	findAll: function(cb) {
		orm.findAll("burgers", function(res){
			cb(res);
		})
 	},

 	update: function(id, cb){
 		orm.update('burgers',id,cb);
 	},

 	create: function(name, cb){
 		orm.create('burgers', name, cb);
 	}
} 
//Export the database functions for the controller(burgers_controller.js)
module.exports = burger;