const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/star_wars_quotes";
const express = require('express');
const app = express();

app.use(express.static('public'))

var db;

MongoClient.connect(url, function(err, databse){
  if(err) throw err;
  db = database;
  app.listen(8080);
});

app.get('/all', function(req, res){
  db.collection('quotes').find().toArray(function(err, results){
    if(err) throw err;

    var output = "<h1>All the quotes</h1>";

    for (var i = 0; i < results.length; i++) {
      output += "<div>"
      output += "<h3>" + result[i].name + "</h3>"
      output += "<p>" + result[i].quote + "</p>"
      output += "</div>"
    }
    res.send(output);
  });
});
