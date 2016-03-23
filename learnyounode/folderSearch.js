var modular = require('./modular.js');

var exten = process.argv[2];
var extension = process.argv[3];


modular(exten, extension, function(err, data){
	if (err){
		console.log("Error " + err);
	}
	else{
		for (i=0; i<data.length; i++){
			console.log(data[i]);
		}
	}
})


