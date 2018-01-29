'use strict';

function reverser(sentence) {
  var words = sentence.split(' '); // Split the sentence into words
  var output = new Array(); // Initiate the output
  words.forEach(function (word) { // For each word
    output.push(word.split('').reverse().join('')); // Reverse the word and add it to the output
  });
  return output.join(' '); // Join output to string and return it
}