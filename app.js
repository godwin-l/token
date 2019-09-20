var express = require('express');
var path = require('path');
var db = require('./db/mongoose');
var token = require('./controllers/tokenController');




var app = express();
var port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/mongo',token);







app.listen(port,()=>{
  console.log("Listening on localhost")
});

module.exports = app;
