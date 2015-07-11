var nodejsWebsocket = require("nodejs-websocket");
var server = nodejsWebsocket.createServer(function(connection){
    console.log("A new connection is established");

    connection.on("text", function(msg) {
        // The server maintains a var called connections which is used here.
        server.connections.forEach(function(con){ 
            con.sendText(msg);
        });
    });
});
server.listen(9090);
console.log("Listening on port 9090");