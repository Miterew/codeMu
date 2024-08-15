"use strict"
// ⊗jsPmFBRL

// №1
// Объясните почему. 
// Что хотел сделать автор данного кода? Исправьте ошибку автора.


function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
    return sum; // перенес return из цикла в тело функции
}

console.log( func(5) );

// Автор кода хотел найти сумму чисел от 1 до num