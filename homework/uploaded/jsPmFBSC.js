"use strict"
// ⊗jsPmFBSC

// №1

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

console.log( round(sqrt(2)) );

// #2


function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res);

// #3
function round(num) {
	return num.toFixed(3);
}

res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);
