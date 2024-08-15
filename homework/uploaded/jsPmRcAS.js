"use strict"

// ⊗jsPmRcAS

// №1

function getSumSquare(arr) {
    let sum = square(arr.shift());

    if(arr.length !== 0) {
        sum += getSumSquare(arr);
    }

    function square(num) {
        return num ** 2;
    }

    return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(getSumSquare(arr));