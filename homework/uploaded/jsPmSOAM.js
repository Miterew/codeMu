"use strict"

// ⊗jsPmSOAM
// Не запуская код, определите, что выведется в консоль:


// #1
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr  = ['a', ...arr1, 'b', 'c', ...arr2];
// console.log(arr);
// // 'a', 1, 2, 3, 'b', 'c', 4, 5, 6
// // Правильно


// // #2
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr  = ['a', ...arr1, ...arr1, 'b', 'c'];
// console.log(arr);
// // 'a', 1, 2, 3, 1, 2, 3, 'b', 'c'
// // Правильно

// // #3
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];

// let arr  = ['a', 'b', 'c', ...arr2];
// console.log(arr);

// 'a', 'b', 'c', 1, 2, 3, 4, 5, 6
// Правильно

// // #4
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// let arr3 = [...arr2, 7, 8, 9];

// let arr  = [0, ...arr3];
// console.log(arr);

// // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// // Правильно

// // #5
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);
// 1, 2, 3
// // Правильно