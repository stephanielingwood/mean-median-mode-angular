'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mmm = require('./lib/mean_median_mode');
var port = process.env.port || 3000;
var numberize = require('./lib/numberize');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/build/'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.post('/mean', function(req, res) {
  var string = req.body.data;
  var array = numberize(string);
  var mean = mmm.Mean(array);
  res.json({mean: mean});
});

app.post('/median', function(req, res) {
  var string = req.body.data;
  var array = numberize(string);
  var median = mmm.Median(array);
  res.json({median: median});
});

app.post('/mode', function(req, res) {
  var string = req.body.data;
  var array = numberize(string);
  var mode = mmm.Mode(array);
  res.json({mode: mode});
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});
