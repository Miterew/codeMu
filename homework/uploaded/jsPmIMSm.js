"use strict"

// ⊗jsPmIMSm

// #1

let arr = [-1, 2, 3, -18];

let result = arr.some( elem => elem > 0);
console.log(result);

// #2
let arr2 = [10, 20, 30];

let result2 = arr2.some(function(elem, index) {
	return elem * index > 30;
})

console.log(result2);