"use strict"

// ⊗jsPmRcEP

// №1
let arr = [1, 2, 3, 4, 5];
let sum = 0;

function func(arr) {
    sum += square(arr.shift());
    
    function square(num) {
        return num ** 2;
    }

    if (arr.length != 0) {
        func(arr);
    }

    return sum;
}

console.log(func(arr));