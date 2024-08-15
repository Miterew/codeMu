"use strict"
// ⊗jsPmSMSRe

// №1
let str = '1-2-3-4-5';

while(str.includes('-')){
    str = str.replace('-', '.');
}
console.log(str);