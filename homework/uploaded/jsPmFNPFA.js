"use strict"
// ⊗jsPmFNPFA



// #1
function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

let result = test([2, 4, 8], function(elem) {return elem * elem * elem})

console.log(result);