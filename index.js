const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require("./services/user");
const Chat = require("./services/chat");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", (socket) => {
    const user = new User(socket);

    socket.on("disconnect", () => {
        //IDK
    });

});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}.`));

//TODO Move this functionality to class-based structures, like in the Talker and Chat classes - Everything must be modular and nice
/*app.use(express.static("public"))

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
*/