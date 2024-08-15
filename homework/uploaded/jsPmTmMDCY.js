"use strict"

// ⊗jsPmTmMDCY

// #1
// Определите какой день недели будет 31 дек текущего года

let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);

console.log(date.getDay());