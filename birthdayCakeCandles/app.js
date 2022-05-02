'use strict';

function birthdayCakeCandles(candles) {
    candles = candles.sort((a, b) => { return b - a });
    const max = candles[0];
    let count = 0;
    candles.forEach(int => {
        if (int == max) {
            count++;
        }
    });
    return count;
}

birthdayCakeCandles([4, 4, 4, 1, 3]);