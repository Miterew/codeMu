"use strict"
// ⊗jsPmMuAr


// №1
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];

console.log( arr[3][2], arr[1][1], arr[2][0], arr[0][0]  )


// №2
let arr = [[1, 2], [3, 4], [5, 6]];
let res = 0;

for (let sum of arr){
    for ( let sumSubArr of sum ){
        res += sumSubArr;
    }
}
console.log(res);