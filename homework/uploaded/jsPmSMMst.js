"use strict"
// ⊗jsPmSMMst

// №1
// let num = '12345'; // сделал строкой тк split работает со строками
// let arr = num.split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit); // сделал числом
// }

// console.log(sum);


// #2
// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit; // сделал числом через +
// }

// console.log(sum);


// // №3
// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);  // добавил + перед =
// }

// console.log(sum);



// #4
// let num = 12345;
// let arr = String(num).split('');

// let sum = 0; // изменил тип данных со строк на число
// for (let digit of arr) {
// 	sum += Number(digit);
// }

// console.log(sum);


// №5
let num = 12345;
let arr = String(num).split('');

let prod = 1; // изменил с 0 на 1 тк на 0 не умножаем
for (let digit of arr) {
	prod *= digit;
}

console.log(prod);