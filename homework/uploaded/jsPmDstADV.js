"use strict"

// ⊗jsPmDstADV

// #1

let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position = 'trainee'] = arr;

// Проверка
console.log(position);

let arr2 = ['John', 'Smit', 'development'];
let [name2, surname2, department2, position2 = 'trainee'] = arr2;

console.log(position2);



// Что удалено

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'trainee';
// }