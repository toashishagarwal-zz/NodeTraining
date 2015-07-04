var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var querystring = require("querystring");
var calculator = require("./calculator");


var PORT = 8080;
var staticResources = [".jsp",".html",".htm",".ico", ".gif", ".png"];

function isStaticResource(resource) {
    var resourceExtn = path.extname(resource);
    return staticResources.indexOf(resourceExtn) !== -1;
}

var server = http.createServer(function(req, res){
    var resourcePath = path.join(__dirname, req.url);

    var pathName = url.parse(req.url).pathname;
    var queryStr = url.parse(req.url, true).query;
    console.log(" ----> ", pathName);
    console.log(" ----> ",queryStr);
    
    if(isStaticResource(pathName)) {
        fs.exists(resourcePath, function(exists) {
            if(!exists) {
                res.statusCode= 404;
                res.end();
            } else {
                fs.createReadStream(resourcePath).pipe(res);    
            }
        })
    } else if (pathName === "/calculator") {
        var number1 = parseInt(queryStr.number1,10),
            number2 = parseInt(queryStr.number2, 10),
            operation = queryStr.action;
        
        calculator[operation](number1, number2);
        res.write(number1.toString() + " " + operation + " " + number2.toString()+ " = " + calculator.getResult().toString());
        res.end();
    } else {
        res.statusCode= 404;
        res.end();
    }
} );
server.listen(PORT);
console.log("Listening on port - ", PORT);