"use strict"

// ⊗jsPmTmMDB

// #1
let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

console.log( (now - today)  / 1000 / 60 / 60);