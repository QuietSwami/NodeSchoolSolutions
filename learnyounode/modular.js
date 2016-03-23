var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback){
	
	fs.readdir(dirName, function(err, list){
		if (err){
			callback(err, null);
		}
		else{
			var listFiles = []
			for (i=0; i < list.length; i++ ){
				if (path.extname(list[i]) === '.' + fileExt){
					listFiles.push(list[i]);
				}
			}
			callback(null, listFiles);
		}
	});
	
}