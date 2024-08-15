"use strict"
// ⊗jsPmLpFl

// №1
let arr = ['a', 'b', 'c', 'd', 'e'];
let flagIsLet = false;

for (let i of arr){
    if ( i == "c" ){
        flagIsLet = true;
        break;
    }
}

if ( flagIsLet == true ){
    console.log('+++')
} else {
    console.log('---')
};

// Выполняя задачу понял, что отличает let of (массив) от let in (объект)
// в переменной let i of arr в переменную i записывается значение массива
// а в переменную let i in obj в перменную i записывается ключ объекта
 
// №2

function isPrimeNumber(number) {
let flagHard = false;

for (let i = 1; i <= number; i++){
    
    if ( number % i === 0 && i != 1 && i != number){
        flagHard = true;
    }
        
}

let result = flagHard ? 'Число сложное' : 'Число простое' 
return result;
}

console.log(isPrimeNumber(2087))

// В этой задаче узнал, что return нельзя выводить в
// конструкции условие ? true : false;
// сперва хотел сделать так:
// flagHard ? return 'Число сложное' : 'Число простое';
// но chatGPT подсказал, что надо сперва сделать переменную,
// и уже переменную передавать в return;