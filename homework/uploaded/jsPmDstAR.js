"use strict"

// ⊗jsPmDstAR

// #1

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, ...rest] = arr;

// Проверка
console.log(rest);

let info = arr.slice(2); // это было изначально, сравним выдачу
console.log(info);

// Удалено при редактировании

// let name    = arr[0];
// let surname = arr[1];
