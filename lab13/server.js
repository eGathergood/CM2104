var express = require('express');
var knockknock = require ('knock-knock-jokes');
var app = express();

app.use(express.static("public"));

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


app.get('/calc', function(req, res){
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var operator = parseInt(req.query.operator)
  res.send((x) +(y) +(operator) );

})

app.listen(8080);
