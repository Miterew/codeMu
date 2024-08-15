"use strict"
// ⊗jsPmFNOFP

// Определите, не запуская код, что выведется в консоль:



// #1


function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	func();
}

test(1, 2);

// в консоле выведет число 3

// 2

function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func();
}

test(1, 2);
// в консоле выведет число 4 так как перед инициацией параметр перезаписан переменной