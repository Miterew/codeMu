"use strict"
// ⊗jsPmLpDbg

// №1
let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum = 0;
let objToStr = '';


for (let key in obj) {

    objToStr = String( obj[key] );

	if (objToStr[0] === '1' || objToStr[0] === '2') {
		sum += +obj[key];
	}

}

console.log(sum);