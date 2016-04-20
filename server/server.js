var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var parser = require('body-parser');
var UserController = require('./users/userController')


//mongoose connection
//process.env.MONGOLAB_URI
var mongoUri = 'mongodb://localhost/noteit';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

var app = express();

//middleware
app.use(morgan('dev'));
app.use(parser.json());
app.use(express.static(__dirname + '/../client'));

app.post('/users', UserController.signup);
app.post('/users/saveDestination', UserController.saveDestination);

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening to: " + port);
});

module.exports = app;
