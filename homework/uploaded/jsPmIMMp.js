"use strict"

// ⊗jsPmIMMp

// №1

// Дан массив с числами. Используя метод map извлеките
//  из каждого элемента массива квадратный корень 
//  и запишите результат в новый массив.

let arr = [9, 25, 36];

let res = arr.map(function(elem, index) {
    return Math.sqrt(elem);
});

console.log(res);


// #2
// Дан массив со строками. Используя метод map в конец 
// значению каждого элемента массива добавьте символ '!'.


let newRes = arr.map(function(elem) {
    return elem + '!'; 
}) 

console.log(newRes);


// #3

// Дан массив со строками. Используя метод map 
// переверните символы каждой строки в обратном порядке.

let arrStr = ['раз', 'два', 'три'];

let arrStrReverse = arrStr.map(function(elem) {

    let spl = elem.split(''); // делаем эл-т массива из каждой буквы
    let reverse = spl.reverse(); // переворачиваем
    spl = reverse.join(''); // делаем обратно строку из массива

    return spl;
})

console.log(arrStrReverse);


// #4

// Используя метод map преобразуйте этот массив в следующий:

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];


// '123' => [1, 2, 3]
let arr4 = ['123', '456', '789'];

let mapster = arr4.map(function(elem) {
    
        let newArr = elem.split('');

        let newRes = newArr.map(function(element) {
            return +element;
        })

        return newRes;
}) 

console.log(mapster);



// #5

// Дан массив с числами. Используя метод map запишите 
// в каждый элемент массива значение этого элемента, 
// умноженное на его порядковый номер в массиве.


let arr5 = arr.map(function(elem, index) {
    return elem * index;
})

console.log(arr5);