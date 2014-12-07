'use strict';

module.exports = function(string) {
  var array = string.split(',');
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr[i] = parseInt(array[i]);
  }
  return arr;
};
