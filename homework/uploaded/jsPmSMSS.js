"use strict"
// ⊗jsPmSMSS

// №1
// https://code.mu/ru/javascript/book/prime/inbuilt/string/searching/

let link1 = 'http://code.mu/';
let link2 = 'https://code.mu/index.html';

console.log ( link1.includes('http://') ); // includes
console.log ( link1.startsWith('http://') ); // startsWith
console.log ( link1.indexOf('//') ); // indexOf

// №2
console.log( link1.endsWith('index.html')); // endsWith
console.log( link2.endsWith('index.html')); // для теста
console.log( link2.lastIndexOf('index.html')); // lastIndexOf

