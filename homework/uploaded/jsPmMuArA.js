"use strict"
// ⊗jsPmMuArA


// №1
let arr = [
    [ 
        1, 2, 3, [4, 5, [6, 7]]
    ], 
    [
        8, [9, 10]
    ]
];

let res = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] 
			+ arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];

// Проверка
console.log(`Сумма равна: ${res}`);
console.log( '1 ? -> ' + arr[0][0]);
console.log( '2 ? -> ' + arr[0][1]);
console.log( '3 ? -> ' + arr[0][2]);
console.log( '4 ? -> ' + arr[0][3][0]);
console.log( '5 ? -> ' + arr[0][3][1]);
console.log( '6 ? -> ' + arr[0][3][2][0]);
console.log( '7 ? -> ' + arr[0][3][2][1]);
console.log( '8 ? -> ' + arr[1][0]);
console.log( '9 ? -> ' + arr[1][1][0]);
console.log( '10 ? -> ' + arr[1][1][1]);