'use strict';

function cubeOdd(arr) {
  var sum = 0;
  var tester = function findOdd(num) { //create var to find odd numbers
    if (num % 2 !== 0) {
      return num;
    } else {
      return undefined;
    }
  };
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') { // test for numbers
      return undefined;
    } else if (tester(arr[i]) !== undefined) {
      sum += Math.pow(arr[i], 3);
    }
  }
  return sum;
}