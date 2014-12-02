/*jshint browserify: true*/
/*global angular, console, mmm*/
'use strict';

module.exports = function(app) {

  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.findMean = function() {
      $http({
        method: 'POST',
        url: '/mean',
        data: {data: $scope.mmm.meanNums}
      })
      .success(function(data) {
        $scope.mean = data.mean;
      })
      .error(function(data) {
        console.log(data);
      });
    };

    $scope.findMedian = function() {
      $http({
        method: 'POST',
        url: '/median',
        data: {data: $scope.mmm.medianNums}
      })
      .success(function(data) {
        $scope.median = data.median;
      })
      .error(function(data) {
        console.log(data);
      });
    };

    $scope.findMode = function() {
      $http({
        method: 'POST',
        url: '/mode',
        data: {data: $scope.mmm.modeNums}
      })
      .success(function(data) {
        $scope.mode = data.mode;
      })
      .error(function(data) {
        console.log(data);
      });
    };

  }]);

};
