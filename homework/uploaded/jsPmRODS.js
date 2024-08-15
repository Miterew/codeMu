"use strict"

// ⊗jsPmRODS


// #1
function srednee(...arr) {
    let sum = 0;

    for(let num of arr) {
        sum += num;
    }

    return sum;
}

console.log(srednee( 1, 2, 3, 4 ));