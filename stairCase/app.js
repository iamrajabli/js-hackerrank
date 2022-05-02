'use strict';

function staircase(n) {
    let d = '';
    for (let j = 0; j < n; j++) {
        d += ' ';
    }
    for (let i = 1; i <= n; i++) {
        d = d.replace(' ', '');
        d += '#';
        console.log(d);
    }
}

staircase(4)