var express = require('express');
/*var bodyParser = require('body-parser');
var mongoose = require('mongoose');*/

/*mongoose.connect('mongodb://localhost/something');

var routes = require('./routes/index');
var users = require('./routes/users');*/

var app = express();

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));*/

app.use(express.static('public'));
app.use(express.static('node_modules'));

/*app.use('/', routes);
app.use('/users', users);*/

var port = process.env.PORT || '4001';

app.listen(port, function() {
	console.log('server is up', port);
});

