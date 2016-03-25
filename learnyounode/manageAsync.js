var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

for (i=0; i<urls.length; i++){
	http.get(urls[i], function(response){
		response.pipe(bl(function(err, data){
			if(err){
				console.log(err);
			}
			else{
				console.log(data.toString());
			}
		}));
	});
};