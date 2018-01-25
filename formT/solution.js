'use strict';
function formatWords(words) {
    if (!words) { return false }
    return words.filter(word => word.length > 0).join().replace(/,([^,]*)$/, ' and $1').replace(/,/g, ', ')
}



console.log(formatWords(['ninja', 'samurai', 'ronin'])); 