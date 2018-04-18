var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("This works i think - express");
});

app.listen(8080);
