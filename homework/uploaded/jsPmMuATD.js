"use strict"
// ⊗jsPmMuATD


// №1
let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];

let res = 0;

for (let key of arr){
	for (let subKey of key){
		for (let subSubKey of subKey){
			res += subSubKey;
		}
	}
}
console.log(res);