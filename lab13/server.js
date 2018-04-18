var express = require('express');
var knockknock = require ('knock-knock-jokes');
var app = express();

app.get('/', function(req, res){
  res.send("This works i think - express");
});

app.get('/test', function(req, res){
  res.send("Route 2");
});

app.get('/joke', function(req, res){
  var randomJoke = knockknock()
  res.send(randomJoke);
});

app.get('/add', function(req, res){
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  res.send("X + Y=" +(x+y));

});

app.listen(8080);
