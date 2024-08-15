"use strict"
// ⊗jsPmSMMRa

// №1
// Давайте выведем случайное целое число от 10 до 100:

// function getRandomInt(min, max) {
//     return Math.floor ( Math.random() * (max - min + 1) + min);
// }

// console.log( getRandomInt(1, 100) );


// №2
// С помощью цикла заполните массив 10-ю случайными целыми числами.

let arr = [];

for (let i = 0; i < 10; i++){
    arr.push( Math.floor( Math.random() * 10 + 1 ) );
}

console.log(arr);