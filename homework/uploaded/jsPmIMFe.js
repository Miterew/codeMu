"use strict"

// ⊗jsPmIMFe

// №1

let arr = [1, 2, 3, 4, 5];
let sum = 0;

let arrForEach = arr.forEach(function(elem) {
    
    function setSqare(num) {
        return num ** 2;
    }

    sum += setSqare(elem);
})

console.log(sum);