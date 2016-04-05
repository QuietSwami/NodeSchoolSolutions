var concat = require('concat-stream');

process.stdin.pipe(concat(function(body){
	var string = body.toString().split('').reverse().join('');
	console.log(string);

}));