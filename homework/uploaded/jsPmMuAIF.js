"use strict"
// ⊗jsPmMuAIF


// №1
// let arr = [[1, 2, 3], [4, 5], [6]];
// let res = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     res += arr[i][j];
//   }
// }
// console.log(res);

// №2
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let res = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      res += arr[i][j][k];
    }
  }
}

console.log(res);