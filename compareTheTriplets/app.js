'use strict';

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                alice++;
            } else if (a[i] < b[i]) {
                bob++;
            }
        }
    } else {
        return 'array lengths are not equal!';
    }
    let arr = [alice, bob];
    return arr
}

console.log(compareTriplets([5, 6, 7, 9], [3, 6, 10, 1]));