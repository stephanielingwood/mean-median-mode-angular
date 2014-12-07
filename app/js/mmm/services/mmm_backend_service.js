'use strict';

module.exports = function(app) {

  var numberize = function(string) {
    var array = string.split(',');
    var convertedArray = [];
    for (var i = 0; i < array.length; i++) {
      convertedArray[i] = parseInt(array[i]);
    }
    return convertedArray;
  };

  app.factory('mmmBackend', [function() {
    return {
      mean: function(string) {
        var array = numberize(string);
        var sum = 0;
        var mean = 0;
        for (var i = 0; i < array.length; i++) {
          sum += array[i];
        }
        mean = parseInt((sum / array.length));
        return mean;
      },

      median: function(string) {
        var array = numberize(string);
        var median = 0;
        var half = Math.floor(array.length / 2);

        array = array.sort();

        if (array.length % 2) {
          median = parseInt(array[half]);
        }
        else {
          median = parseInt((array[half - 1] + array[half]) / 2.0);
        }

        return median;
      },

      mode: function(string) {
        var previousNum;
        var counter = 0;
        var highestCount = 0;
        var highestNumbers = [];
        var mode = [];
        var array = numberize(string);
        array = array.sort();

        for (var i = 0; i < array.length; i++) {
          if (array[i] === previousNum) {
            counter++;
            if (counter > highestCount) {
              highestNumbers = [];
              highestNumbers.push(array[i]);
              highestCount = counter;
            }
            if (counter === highestCount) {
              highestNumbers.push(array[i]);
            }
          }
          else {
            previousNum = array[i];
            counter = 1;
          }
        }

        mode = parseInt(highestNumbers.slice(1, highestNumbers.length));
        return mode;
      }

    };
  }]);
};
