"use strict"

// ⊗jsPmTmDOD

// #1 
let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);

let res = date2 - date1; // не знаю как проверить :)
console.log(res); 

// #2
let resDays = res / 1000 / 60 / 60 / 24;
console.log(resDays);

// #3
let resMonths = resDays / 30;
console.log(resMonths);

// #4
let resYears = resMonths / 12;
console.log(resYears);