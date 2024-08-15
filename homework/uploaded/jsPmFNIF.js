"use strict"
// ⊗jsPmFNIF



// #1
function func(num1, num2) {
    function square(num) {
        return num * num;
    }
    
    let result = square(num1) + square(num2);
    
    return result;
}

console.log(func(2, 5));