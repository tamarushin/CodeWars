'use strict';

function mutateMyStrings(stringOne, stringTwo) {

    var newStrings = `${stringOne}\n`;
    var s1 = stringOne.split('');
    var s2 = stringTwo.split('');
    for (var i = 0; i < stringOne.length; i++) {
        if (s1[i] !== s2[i]) {
            s1[i] = s2[i];
            newStrings += `${s1.join('')}\n`;
        }
    }
    return newStrings;
}