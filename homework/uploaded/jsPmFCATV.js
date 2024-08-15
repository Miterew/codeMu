"use strict"

// ⊗jsPmFCATV

// Определите, не запуская код, что выведется в консоль:

// #1
let result = function() {
	return '!';
}();
		
console.log(result);

// Я думаю по итогу в консоле будет выведено: !

// #2

let result = function() {
	return '!';
};
		
console.log(result);

// В консоль выведется код функции, так как она не вызвана через () после }

// #3

let result = function() {
	return '!';
};
		
console.log(result());

// В консоль выведется !, так как эта функция сработала