var express = require("express");
var app = express();

var sockio = require('socket.io');

var bodyParser = require('body-parser');
var multer = require('multer'); 

var fs = require("fs");
var path = require('path');


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

var routes = require("./routes/index");


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.use("/", routes);

server = app.listen(2000);
var ws = sockio.listen(server);

ws.on('connection',function  (socket) {
	socket.on('foo', function (data) {
		console.log(data);
		socket.emit('msg', data);
	});
	socket.on('scommand', function  (data) {
		console.log(data);
	})
});

module.exports = app;
exports.sockio = sockio;