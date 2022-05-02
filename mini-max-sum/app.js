'use strict';

function miniMaxSum(arr) {
    const newArr = arr.sort((a, b) => { return a - b });
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < newArr.length - 1; i++) {
        minSum += newArr[i];
    }
    for (let i = 1; i < newArr.length; i++) {
        maxSum += newArr[i];
    }

    console.log(minSum, maxSum);

}

miniMaxSum([1, 3, 5, 7, 9]);