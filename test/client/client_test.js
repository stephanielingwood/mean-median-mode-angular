'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('mmmController', function() {
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should create a controller', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('finding mean, median, and mode', function() {

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a post request to find the mean', function() {
      $httpBackend.expectPOST('/mean').respond({'mean': 5});
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.meanNums = '3,5,5,7';
      $scope.findMean();
      $httpBackend.flush();
      expect($scope.mean).toBeDefined();
      expect($scope.mean).toBe(5);
    });

    it('should find the median', function() {
      $httpBackend.expectPOST('/median').respond({'median': 5});
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.medianNums = '3,5,5,7';
      $scope.findMedian();
      $httpBackend.flush();
      expect($scope.median).toBeDefined();
      expect($scope.median).toBe(5);
    });

    it('should find the mode', function() {
      $httpBackend.expectPOST('/mode').respond({'mode': 5});
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.modeNums = '3,5,5,7';
      $scope.findMode();
      $httpBackend.flush();
      expect($scope.mode).toBeDefined();
      expect($scope.mode).toBe(5);
    });
  });
});
