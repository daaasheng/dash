'use strict'

var fs = require('fs');

fs.readFile('test.txt', 'utf-8', function(err, data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
		console.log(data.length + ' bytes');
	}
});