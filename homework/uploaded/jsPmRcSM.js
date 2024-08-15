"use strict"

// ⊗jsPmRcSM

// №1
// Возведите все элементы-числа этого массива в квадрат.


function func(arr) {

    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'object') {
            arr[i] = func(arr[i]);
        } else {
            arr[i] = sqare(arr[i]);
        }
    }

    function sqare(num) {
        return num * num;
    }

    return arr;
}


let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log( func(arr) );
