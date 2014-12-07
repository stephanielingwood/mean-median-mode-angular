'use strict';

var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/build/'));

app.get('/', function(req, res) {
  res.status(200).sendfile('index.html');
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});
