var fs = require("fs");
var calculator = require("./calculator.js");
fs.readFile("calculatorOperations.csv", { encoding: "utf-8"}, function(err, contents){
	if(err) {
		console.log("File read error occurred " + err);
		return;
	}

	var lines = contents.split("\n");
	
	//var result = 0;
	for (var i = 0; i < lines.length ; i++) {
		var single = lines[i].split(',');
		/* if(single[1] === "add") {
			result += single[0];
		} else if (single[1] === "subtract") {
			result -= single[0];
		} else if (single[1] === "multiply") {
			result *= single[0];
		} else if (single[1] === "divide") {
			result /= single[0];
		} */
		calculator[single[1]](parseInt(single[0]));

	};

	console.log(calculator.getResult());
})


