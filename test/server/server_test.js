/*global describe, it, before, beforeEach, after, afterEach */

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
require('../../server');

chai.use(expect);

var port = process.env.port || 3000;

describe('endpoints for mean, median, and mode', function() {

  it('finds the mean for an array of numbers', function(done) {
    chai.request('http://localhost:' + port)
    .post('/mean')
    .send({'data': '3,5,5,7'})
    .end(function(err, res) {
      expect(res.body.mean).to.eql(5);
      done();
    });
  });

  it('finds the median for an array of numbers', function(done) {
    chai.request('http://localhost:' + port)
    .post('/median')
    .send({'data': '3,5,5,7'})
    .end(function(err, res) {
      expect(res.body.median).to.eql(5);
      done();
    });
  });

  it('finds the mean for an array of numbers', function(done) {
    chai.request('http://localhost:' + port)
    .post('/mode')
    .send({'data': '3,5,5,7'})
    .end(function(err, res) {
      expect(res.body.mode).to.eql(5);
      done();
    });
  });

});
