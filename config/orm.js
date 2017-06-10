//import mysql connection 
var connection = require("../config/connection.js");

/**file contains various methods that we can do with our data**/

function objToSql(ob){
	//column1=value, column=value2, ...
	var arr = [];

	for(var key in ob) {
		if (ob.hasOwnProperty(key)){
					arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

//Object for all our mySQL statement functions 
var orm = {

	//findAll
	findAll: function(tableInput, cb) {
		var queryString = 'SELECT * FROM '+ tableInput +';';
		connection.query(queryString, function(err, result) {
			if(err){
				throw err;
			}
			cb(result);
		});
	},



update: function (tableInput, condition, cb){
		connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';',
		 function(err, result){
		 	if(err)throw err;
		 	cb(result);
		 })
	},

	create: function(tableInput, val, cb){
		connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", 
			function(err,result){
			if(err)throw err;
			cb(result); 
		})
	}
}


//Export the orm object for the model (burger.js)
module.exports = orm; 