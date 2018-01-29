'use strict';

function high(x)
{
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var wordCounts = [];
  var highScore = 0;
  var stringNew = '';
  x = x.toLowerCase();
  var xArr = x.split('');

  for (var wordNum = 0; wordNum < xArr.length; wordNum++) {
    wordCounts[wordNum] = 0;
    for (var lettersNum = 0; lettersNum < xArr[wordNum].length; lettersNum++) {
      if (letters.indexOf(xArr[wordNum][lettersNum]) !== -1)
        wordCounts[wordNum] += letters.indexOf(xArr[wordNum][lettersNum]) + 1;
    }
  }

  for (var numLoop = 0; numLoop < xArr.length; numLoop++)
    if (wordCounts[numLoop] > highScore) {
      highScore = wordCounts[numLoop];
      stringNew = xArr[numLoop];
    }

  return stringNew;
}