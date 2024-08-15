"use strict"
// ⊗jsPmMuAI


// №1
// let arr = [[1, 2, 3], [4, 5], [6]];
// let res = 0;

// for (let subArr of arr) {
//   for (let subSubArr of subArr){
//     res += subSubArr;
//   };
// };

// console.log(res);

// №2
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let res = 0;

for (let num of arr) {
  for (let subNum of num) {
    for (let subSubNum of subNum) {
      res += subSubNum;
    }
  }
}

console.log(res);