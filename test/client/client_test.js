'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('mmmController', function() {
  var $controllerConstructor;
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

    it('should find the mean', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.meanNums = '3,5,5,7';
      $scope.findMean();
      expect($scope.mean).toBe(5);
    });

    it('should find the median', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.medianNums = '3,5,5,7';
      $scope.findMedian();
      expect($scope.median).toBe(5);
    });

    it('should find the mode', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.modeNums = '3,5,5,7';
      $scope.findMode();
      expect($scope.mode).toBe(5);
    });

  });
});
