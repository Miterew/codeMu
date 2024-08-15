"use strict"

// ⊗jsPmRcSS

// №1
// С помощью рекурсии найдите сумму элементов этого объекта.

function getSumObj(obj) {
    let sum = 0;

    for(let elem in obj) {
        if(typeof obj[elem] == 'object') {
            sum += getSumObj(obj[elem]);
        } else {
            sum += obj[elem];
        }
    }

    return sum;
}


let object = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
console.log(getSumObj(object));

console.log('-----------------')



// #2

// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'


function getArrayToOneString(arr) {
    let str = '';

    for(let symb of arr) {
        if(typeof symb === 'object') {
            str += getArrayToOneString(symb);
        } else {
            str += symb;
        }
    }
    return str;
}

let arr = ['a', ['b', 'c', 'd'], ['e', 'f', 
	['g', ['j', 'k']]]] 
console.log(getArrayToOneString(arr));