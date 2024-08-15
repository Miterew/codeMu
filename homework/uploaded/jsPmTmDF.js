"use strict"

// ⊗jsPmTmDF


function addZero(num) {
    if(num >= 0 && num <=9) {
        return '0' + num;
    }
    return num;
}


let data = new Date();
console.log(
    addZero(data.getHours()) + ':' +
    addZero(data.getMinutes()) + ':' +
    addZero(data.getSeconds()) + ' ' +
 
    addZero(data.getDate()) + '.' +
    addZero(data.getMonth() + 1) + '.' +
    addZero(data.getFullYear())
)