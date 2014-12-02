var MeanMedianMode = function(testArray) {

  this.Mean = function(testArray) {
    var sum = 0;
    var mean = 0;

    for (i = 0; i < testArray.length; i++) {
      sum += testArray[i];
    }

    mean = parseInt((sum / testArray.length));
    return mean;
  };

  this.Median = function(testArray) {
    var array = testArray.sort();

    var median = 0;
    var half = Math.floor(array.length / 2);

    if (array.length % 2) {
      median = parseInt(array[half]);
    }
    else {
      median = parseInt((array[half - 1] + array[half]) / 2.0);
    }

    return median;
  };

  this.Mode = function(testArray) {
    var previousNum;
    var counter = 0;
    var highestCount = 0;
    var highestNumbers = [];
    var array = testArray.sort();
    var mode = [];

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
  };
};

var mmm = new MeanMedianMode();
module.exports = mmm;

//Thanks to Alnitak on Stack Overflow, for the inspiration to the mode solution:
//http://stackoverflow.com/questions/18742238/get-statistical-mode-in-javascript-without-using-assosiative-arrays
