"use strict"

// ⊗jsPmTmMPD

// #1
let now = new Date();

let yesterDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12 );
let toDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12 );

console.log( (toDay - yesterDay) / 1000 / 60 /60 );