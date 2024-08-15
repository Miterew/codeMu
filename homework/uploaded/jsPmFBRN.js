"use strict"
// ⊗jsPmFBRN

// №1
// Что выведется в консоль в результате выполнения следующего кода:
// Объясните почему.

// function func(num) {
// 	return num; // Выведется 3 и выполнение скрипта остановится тут
	
// 	let res = num ** 2;
// 	return res;
// }

// console.log( func(3) );



// №2
// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }

// console.log( func(10) ); 
// console.log( func(-5) ); // выведет 5, тк модуль числа


// №3
function func(num) {
	if (num <= 0) {
		return Math.abs(num); // выведет модуль 5 и остановится (2)
	}
	
	return num ** 2; // выведет 100 тк проходит фильтр
}

console.log( func(10) ); // (1)
console.log( func(-5) ); // (2)