"use strict"
// ⊗jsPmFBAdv

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
	 res += elem;
	}
	
	return res / arr.length; //  тогда тут надо чтоб просто выдавало res
}

   // сделал вместо ^ две простые функции, одна для суммы вторая средней


function calcSum(arr) { // изменил название ф-ии на calcSum
	let res = 0;
						// пробелы нужны для большей читабельности?
	for (let elem of arr) {
		res += elem;
	}
	
	return res; // выводит ТОЛЬКО сумму элементов массива
}
   
function calcAverage(arr) {  // в этой функции находим среднюю
   return calcSum(arr) / arr.length; // используем ф-ию в ф-ии
}

console.log(calcAverage([5, 5, 5, 5, 5, 4, 3]));
   





	//    #2
   
	// функция по задумке должна возвращать
	// разность суммы элементов массива 1 и массива 2
   
	// я бы разбил эту функцию на две: 
	// 1 функция на нахождение суммы элементов массивов. 
	// Вторая на нахождение разности или просто в console.log вычисление сделать
	// 
	// Минусы примера:
	// 1. Плохое название функции (func)
	// 2. нужно уточнить какой (arr1) в строке 4 и 10
	//    Перепишем задачу

let arr1 = [1, 2, 3];
let arr2 = [0, 1, 5];

function calcSumOfArray(arr) {
	let res = 0;

	for (let elem of arr) {
		res += elem;
	}

	return res;
}
   
console.log (calcSumOfArray(arr1) / calcSumOfArray(arr2));
   
//    #3
   
// В задаче название функции говорит о том, что она считает сумму,
// но в теле результат выдается *= а не +=. 
// Если нужна сумма, то лучше calcSum(arr) и += 
// Ну или calcMultiply и сохранить логику *=
// let res = 0 --> 1 | Надо установить если будет умножение

function calcMultiplyArr(arr) {
	let res = 1;
	
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
}

console.log(calcMultiplyArr([1, 2, 3])); // 6