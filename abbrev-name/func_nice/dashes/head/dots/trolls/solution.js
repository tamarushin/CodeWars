'use strict';

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(function (el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
