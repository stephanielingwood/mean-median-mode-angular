'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
require('../../server');

chai.use(expect);

var port = process.env.port || 3000;

describe('basic server functionality', function() {

  it('serves the html file', function(done) {
    chai.request('http://localhost:' + port)
    .get('/')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    });
  });

});
