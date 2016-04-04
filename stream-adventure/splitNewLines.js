var split = require('split');
var through = require('through2');
var count = 0;

var tr = through(function(buffer, encoding, next){
	count ++;
	if (count % 2 === 0){
		this.push(buffer.toString().toUpperCase());
	}
	else{
		this.push(buffer.toString().toLowerCase());
	}
	next();
});

process.stdin.pipe(tr).pipe(process.stdout);