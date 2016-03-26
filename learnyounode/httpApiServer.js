var url = require('url');
var http = require('http');

var server = http.createServer(function(req, res){
	var parsed = url.parse(req.url, true);
	res.writeHead(200, { 'Content-Type': 'application/json'})  
	if (parsed.pathname === "/api/parsetime"){
		var date = new Date(parsed.query["iso"]);
		var responseBody = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
		};
	}
	else if (parsed.pathname === '/api/unixtime'){
		var d = new Date(parsed.query["iso"]);
		var responseBody = {
			unixtime: d.getTime()
		}
	}
	res.end(JSON.stringify(responseBody));
});
server.listen(process.argv[2]);
