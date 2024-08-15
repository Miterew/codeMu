"use strict"

// ⊗jsPmTmMDE

// #1

let now = new Date();
let zeroHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);

console.log( (zeroHour - now) / 1000 / 60 / 60);