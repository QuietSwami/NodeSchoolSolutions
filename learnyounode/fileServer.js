var http = require('http');
var fs = require('fs');
var file = process.argv[3]
var server = http.createServer(function(req, res){
	var stream = fs.createReadStream(file);
	stream.pipe(res);
});
server.listen(process.argv[2]);