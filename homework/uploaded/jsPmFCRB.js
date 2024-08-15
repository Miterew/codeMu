"use strict"

// ⊗jsPmFCRB

// Определите, не запуская код, что выведется в консоль:

// #1
// let result = (function() {
// 	return '!';
// }());

// console.log(result);

// !


// #2

// let result = (function() {
// 	return '!';
// })();

// console.log(result);

// // !


// #3

// let result = (function() {
// 	return '!';
// });

// console.log(result);

// // код функции


// #4
let result = (function() {
	return '!';
});

console.log(result());

// !