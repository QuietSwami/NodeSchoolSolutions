var fs = require("fs");
var numbOfLines = 0

function countLines(callback){
	fs.readFile(process.argv[1], function doneReading(err, fileContents){
		console.log(fileContents.toString().split('\n'));
		numbOfLines = fileContents.toString().split('\n').length - 1;
		callback()
	});
}

function printNumber(){
	console.log(numbOfLines);
}

countLines(printNumber);
