"use strict"
// ⊗jsPmFBRT

// №1
function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		return num1 * num2; // вместо переменной пишем return
	} else {
		return num1 - num2; // вместо переменной пишем return
	}
	

	// убираем return res;
}

console.log(func(3, 4));
console.log(func(-3, 4)); // добавил проверку