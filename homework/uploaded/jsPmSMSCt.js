"use strict"
// ⊗jsPmSMSCt

// №1
// Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let str = 'я учу javascript!';

console.log(str.substr(2, 3));
console.log(str.substr(6, 10));

console.log(str.substring(2, 5));
console.log(str.substring(6, 16));

console.log(str.slice(2, 5));
console.log(str.slice(6, [16]));
// Надо попробовать написать приложение, например для обработки QR кодов с весовым товаром
// чтоб научиться это делать :)
// Потому что пока вообще не очевидна разница и тяжело запоминать, нужна практика.

