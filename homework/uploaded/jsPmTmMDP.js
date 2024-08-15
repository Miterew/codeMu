"use strict"

// ⊗jsPmTmMDP

// #1
let now = new Date();

let jan = new Date(now.getFullYear(), 0, 1);
let sep = new Date(now.getFullYear(), 8, 10);

let inDays = (sep - jan) / 1000 / 60 / 60 / 24;
console.log( inDays ); 

// #2

let date1 = new Date(now.getFullYear(), now.getMonth(), 20);
let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10);

let daysCounter = (date2 - date1) / 1000 / 60 / 60 / 24;
console.log( daysCounter );