"use strict"

// ⊗jsPmFCMC

// №1
// Допишите следующий код так, чтобы его запуск алертом выводил '!':


+function() {
	return function() {
		return function() {
			alert('!');
		} 
	}
}()()();


// #2

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

+function(num1) {
	return function(num2) {
		console.log(num1 + num2);
	}
}(1)(2);


// #3

//Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

+function(num1) {
	return function(num2) {
		return function(num3) {
			console.log(num1 + num2 + num3);
		}
	}
}(1)(2)(3);