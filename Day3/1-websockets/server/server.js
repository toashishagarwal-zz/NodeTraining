var nodejsWebsocket = require("nodejs-websocket");
var server = nodejsWebsocket.createServer(function(connection){
    console.log("A new connection is established");
    var timer = null;
    connection.on("text", function(msg) {
       console.log("msg --> " + msg);
        if(msg === "start") {
            timer = setInterval(function(){
                connection.sendText(new Date().toString());
            }, 3000);
            
        } else if(msg === "stop") {
            if(timer) 
                    clearInterval(timer);
            
        } else {
            console.log("unknown message");
        }
    });
});
server.listen(9090);
console.log("Listening on port 9090");