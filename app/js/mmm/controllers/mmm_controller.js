'use strict';

module.exports = function(app) {

  app.controller('mmmCtrl', ['$scope', 'mmmBackend', function($scope, mmmBackend) {

    $scope.findMean = function() {
      var string = $scope.mmm.meanNums;
      $scope.mean = mmmBackend.mean(string);
    };

    $scope.findMedian = function() {
      var string = $scope.mmm.medianNums;
      $scope.median = mmmBackend.median(string);
    };

    $scope.findMode = function() {
      var string = $scope.mmm.modeNums;
      $scope.mode = mmmBackend.mode(string);
    };
  }]);
};
