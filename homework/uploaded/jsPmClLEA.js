"use strict"

// ⊗ jsPmClLEA

// Определите, не запуская код, что выведется в консоль:

// #1

function test() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

let func = test();
console.log(func());

// Выведет в консоль: 3


// #2

function test() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

console.log(test()());



// Выведет в консоль: 3


// №3

function test() {
	let num1 = 1;
	
	return function() {
		return num1 + num2;
	}
}

let num2 = 2;
let func = test();
console.log(func());

// Выведет в консоль: 3


// #4

function test() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num = 2;
let func = test();
console.log(func());


// Выведет в консоль: 1
