"use strict"

// ⊗jsPmTmFCh


// Первый способ
let str = '2025-12-31';
let res = str.split('-').reverse().join('/');

console.log(res);

// Второй способ

let res2 = str.split('-');
console.log(`${res2[2]}/${res2[1]}/${res2[0]}`) // не ту это конечно вырвиГлаз