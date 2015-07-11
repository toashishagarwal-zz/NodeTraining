How to execute this program?

Start the server
==================
node server.js
Listening on port 9090

A new connection is established

msg --> hello
unknown message
msg --> start
msg --> stop


Start the client
===================
On Chrome console start typing following 

WebSocket
WebSocket()
var ws = new WebSocket("ws://localhost:9090");
undefined
ws.send("hello")
undefined
ws.send("start");
undefined
ws.addEventListener("message", function(evtArg) {});
undefined
ws.addEventListener("message", function(evtArg) {});
undefined
ws.addEventListener("message", function(evtArg) {console.log(evtArg.data)});
undefined
VM506:2 Sat Jul 11 2015 10:52:40 GMT+0530 (IST)
VM506:2 Sat Jul 11 2015 10:52:43 GMT+0530 (IST)
VM506:2 Sat Jul 11 2015 10:52:46 GMT+0530 (IST)
VM506:2 Sat Jul 11 2015 10:52:49 GMT+0530 (IST)
VM506:2 Sat Jul 11 2015 10:52:52 GMT+0530 (IST)
VM506:2 Sat Jul 11 2015 10:52:55 GMT+0530 (IST)
VM506:2 Sat Jul 11 2015 10:52:58 GMT+0530 (IST)
VM506:2 Sat Jul 11 2015 10:53:01 GMT+0530 (IST)
VM506:2 Sat Jul 11 2015 10:53:04 GMT+0530 (IST)
ws.send("stop")
undefined