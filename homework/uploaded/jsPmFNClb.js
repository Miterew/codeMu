"use strict"
// ⊗jsPmFNClb

// #1

// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

function each(arr, callback) {
    let result = [];

    for(let elem of arr) {
        result.push( callback(elem) );
    }

    return result;
}

console.log ( each([1, 2, 3, 4, 5], function square(num) {
    return num * num;
}));



// #2

// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

let reverse = each(['Привет', 'мир'], function(elem) {
    let reverseArr = [];
    
    let stringToArr = elem.split('');

    for(let i = stringToArr.length - 1; i >= 0; i--) {
        reverseArr.push(stringToArr[i]);
    }
    
    console.log(reverseArr.join('')) // если надо вывести в консоль
    return reverseArr.join(''); // если надо вывести не в консоль
})




// #3

// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

each(['привет', 'мир', 'снов'], function(elem) {
    let firstLetUp = elem.slice(0, 1).toUpperCase();
    let nextLet = elem.slice(1);

    let fullStr = firstLetUp + nextLet;

    console.log( fullStr ); // если надо вывести в каждой строке
    return fullStr // если надо вывести не в консоль
})

