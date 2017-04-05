var express = require('express');
var multer = require('multer'),
	bodyParser = require('body-parser'),
	path = require('path'),
	fs  = require('fs');

var app = new express();
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/', function(req, res){
  res.render('index');
});
app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
	
	res.json(req.file); 
	
	res.status(204).end();
});
var port = 3000;
app.listen( port) 
console.log('listening on port '+port);
