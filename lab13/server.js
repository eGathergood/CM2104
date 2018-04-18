var express = require('express');
var knockknock = require ('knock-knock-jokes');
var app = express();

app.get('/', function(req, res){
  res.send("This works i think - express");
});

app.get('/', function(req, res){
  res.send("Route 2");
});

app.get('/', function(req, res){
  var randomJoke = knockknock()
  res.send(randomJoke);
});

app.listen(8080);
