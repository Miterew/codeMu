"use strict"
// ⊗jsPmSMMP

// №1
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let num = 379;
// let resSqrt = Math.sqrt(num);


// console.log('Квадратный корень из ' + num + ' равен ' + resSqrt);
// console.log('Если округлить до целого получится ' + Math.round(resSqrt));
// console.log('Если округлить до десятых получится ' + resSqrt.toFixed(1));
// console.log('Если округлить до сотых получится ' + resSqrt.toFixed(2));


// №2

// Найдите квадратный корень из 587. 
// Округлите результат в большую и меньшую стороны, 
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let num = 587;
let resSqrt = Math.sqrt(num);

let obj = {
	'floor': Math.floor(resSqrt),
	'ceil':Math.ceil(resSqrt),
};

console.log(obj);