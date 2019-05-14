var express = require("express");
var socket = require("socket.io");
var http = require("http");
var path = require("path");
var fs = require("fs");


var app = express();
var server = app.listen(4000, () => console.log("listening on port 4000"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"))

var io = socket(server);
io.on("connection", (socket) => {

    console.log("made socket connection", socket.id);

    // emit chat info to sockets
    socket.on("chat", function(data){
        io.sockets.emit("chat", data);
    });

    // broadcast typing info to sockets
    socket.on("typing", function(data){
        socket.broadcast.emit("typing", data);
    });

    var readStream;
    socket.on("upload", function(data){
        readStream = fs.createReadStream(path.resolve
            (__dirname, data), {encoding: "binary"}),
            chunks = [];
    });

    readStream.on("readable", function () {
        console.log("Image loading")
    });

    readStream.on("data", function (chunk){
        chunks.push(chunk);
        socket.emit("img-chunk", chunk);
    })

    readStream.on("end", function() {
        console.log("Image loaded")
    })
});
