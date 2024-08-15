"use strict"
// ⊗jsPmFNIFS

// Задание:
// Определите, не запуская код, что выведется в консоль:



// #1
function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}

test();
//Выведет в консоль 1

// #2

function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
}

test();

//В консоль ничего не выведет, просто появится и умрет переменная num = 1

// #3

function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}

// Ничего не выведется, т.к. не инициировано выполнение функции test()

// #4

function test() {
	let num;
	
	function func() {
		console.log(num);
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test();

// Выдаст в консоли сперва 1 потом 2