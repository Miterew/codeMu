"use strict"
// ⊗jsPmFNOIP

// Определите, не запуская код, что выведется в консоль:

// #1


function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num);
}

test(1);

// В консоле отобразится число 1

// 2

function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num + 1);
}

test(1);

// В консоле отобразится число 2


// 3

function test(num) {
	function func(localNum) {
		console.log(num);
	}
	
	func(num + 1);
}

test(1);

// В консоле отобразится число 1


// 4

function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num);
}

test(1);

// В консоле отобразится число 1


// 5

function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum);
}

test(1);

// В консоле ничего не отобразится, как так область видимости localNum не выходит за рамки func.



// 6

function test(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test(1);

// В консоле отобразится число 2
