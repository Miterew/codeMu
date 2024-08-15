"use strict"
// ⊗jsPmLpCdg

// №1
// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, 
// и найдите их сумму.


let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
let arrInStr = '';

for ( let i of arr ){
    
    arrInStr = String( i ) ;

    if ( arrInStr[0] == 1 || arrInStr[0] == 2 ){
        sum += i;
        console.log(arrInStr[0]); 
    };
}

console.log(sum);

// Решил задачу и спросил у GPT на счет ревью
// Он поведал на счет reduce - загуглил, понял что пока рано,
// лучше по учебнику :)