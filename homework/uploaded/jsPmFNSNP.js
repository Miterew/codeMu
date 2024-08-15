"use strict"
// ⊗jsPmFNSNP

// Определите, не запуская код, что выведется в консоль:


// #1


function test(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
}

test(1);

// В консоле выведется число 1

// 2

function test(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test(1);

// В консоли покажет число 1 так как смена значения num в функции func меняет только значения параметра локальной функции.

// #3

function test(num) {
	function func(num) {
		console.log(num);
	}
	
	num = 2;
	func(num);
}

test(1);

// Выведет в консоль 2

// #4

function test(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
	num = 2;
}

test(1);

// Вывелет в консоль 1

