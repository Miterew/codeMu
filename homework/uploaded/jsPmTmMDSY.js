"use strict"

// ⊗jsPmTmMDSY

// #1
let now = new Date();
let nextYearCrismasDay = new Date(now.getFullYear() + 1, 11, 31); 
console.log(nextYearCrismasDay.getDay()); // НГ в 2025 году будет СРЕДА

// #2
let nextYearThisDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log('В след году в эту же дату будет день недели под номером: ' + nextYearThisDate.getDay());

// #3
let lastYearThisDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log('В пред году в эту же дату был день недели под номером: ' + lastYearThisDate.getDay());