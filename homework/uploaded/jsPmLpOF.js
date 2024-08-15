"use strict"

// Заполнение объектов через цикл в JavaScript
// ⊗jsPmLpOF

// #1
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i < arr1.length; i++){
    obj[arr1[i]] = arr2[i];
};

console.log(obj);

// #2
// Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let objNew = {};

for (let i in obj){
    if ( obj[i] % 2 === 0 ) {
        objNew[i] = obj[i];
    };
};

console.log(objNew);

// #3

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};

for (let key in obj){
    newObj[obj[key]] = key;
};

console.log(newObj);