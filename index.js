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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}.`));

// io.sockets.on("connection",(socket)=>{
// 	const user=new User(socket);

// 	socket.on("disconnect",()=>{
// 		console.log(user + " has left the server at port " + port);
//     });
    
//     /**
//      * @param {[Chat]} chats - The chats the user is leaving
//      */
//     socket.on("leave", (...chats)=>{
// 		console.log(user + " has left " + chats);
//     });

//     socket.on("join", (...chats)=>{
// 		console.log(user + " has joined " + chats);
//     });
    
//     socket.on("chat",(event,message)=>{
//         if(event==="joined") alert("Oh man! "+message.username+" just joined "+message.chatName+"!");
//     })

//     socket.on("send", (message, users_to_receive, chat, timestamp)=>{
// 		console.log(user + " has sent the message " + message);
//     });

//     socket.on("block", (user1, user2) => {
//         console.log(user1 + " has blocked " + user2);
//     });
// });