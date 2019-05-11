const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('test');
});

app.listen(3000, () => console.log('server started'));
