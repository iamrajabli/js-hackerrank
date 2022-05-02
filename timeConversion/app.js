'use strict';

function timeConversion(s) {
    let arr = s.split(':');
    let without;
    let hour;
    let fullTime;
    if (s.indexOf('PM') !== -1) {
        if (parseInt(arr[0]) !== 12) {
            hour = parseInt(arr[0]) + 12;
        } else {
            hour = 12;
        }
        without = s.replace('PM', ''); // without am/pm
    } else {
        hour = arr[0];
        without = s.replace('AM', ''); // without am/pm
        if (parseInt(arr[0]) == 12) {
            hour = '00';
        }
    }
    without = without.split(':');
    fullTime = `${hour}:${without[1]}:${without[2]}`;

    return fullTime;
}