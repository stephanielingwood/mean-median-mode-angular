/*jshint browserify: true*/
/*global describe, it, before, beforeEach, after, afterEach */
'use strict';

var expect = require('chai').expect;
var app = require('../../app/js/client.js');

describe('sample client test', function() {
  it('runs a test', function() {
    expect(true).to.eql(true);
  });
});
