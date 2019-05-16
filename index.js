const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Member=require("./services/member");
const User=require("./services/user");
const Chat=require("./services/chat");

const app = express();
const io=require("socket.io")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('test');
});

io.sockets.on("connection",(socket)=>{
	const user=new User(socket);



	socket.on("disconnect",()=>{
		//IDK
	});
});

app.listen(process.env.PORT || 3000, () => console.log('server started'));
