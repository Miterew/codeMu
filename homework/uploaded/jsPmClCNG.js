"use strict"

// ⊗jsPmClCNG

// Определите, не запуская код, что выведется в консоль:

// #1
let counter = 0;
		
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let func = test;

let func1 = func();
let func2 = func();
func1(); // 0
func2(); // 1
func1(); // 2
func2(); // 3

// №2
function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test()();

let func1 = func;
let func2 = func;
func1(); // 0
func2(); // 1
func1(); // 2
func2(); // 3

// Сперва решил этот код так: 0 0 1 1 - потом понял как правильно

// №3

function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test();

let func1 = func();
let func2 = func();
func1(); // 0
func2(); // 1
func1(); // 2
func2(); // 3