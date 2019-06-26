var express = require("express");
var app = express();
var socket = require("socket.io");


var server = app.listen(8080, function () {
    console.log("Listening on port 8080");
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function (socket) {
    socket.on("chat", function (data) {
        io.sockets.emit("chat", data);
    });

    socket.on("escribiendo", function (data) {
        socket.broadcast.emit("escribiendo", data)
    });
});