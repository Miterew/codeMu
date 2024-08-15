"use strict"


// №1
let str = '';

for ( let i = 1; i < 10; i++ ){
    for ( let j = 0; j < 3; j++ ){
        str += i;
    };
};

console.log(str);

// №2
// С помощью двух вложенных циклов выведите на экран следующую строку:
// 11 12 13 21 22 23 31 32 33


let result = '';

for ( let i = 1; i <= 3; i++){

    for (let j = 1; j <= 3; j++){
        result += String(i) + String(j) + ' ';
    };
    
};

console.log(result);