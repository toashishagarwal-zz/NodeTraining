var fs = require("fs");
fs.readFile("test.txt", {encoding: "utf8"}, function(err, contents){
	if(err) {
		console.log("some error occurred" + err);
		return;
	}

	console.log(contents);
})