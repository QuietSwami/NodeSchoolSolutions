var http = require('http');
var fs = require('fs');
var through = require('through2');

var tr = through(function(buffer, encoding, next){
	this.push(buffer.toString().toUpperCase()); 
	next();
});

var server = http.createServer(function(req, res){
	if (req.method === 'POST'){
		req.pipe(tr).pipe(res);
	}
	else{
		res.end();
	}
});
server.listen(process.argv[2]);