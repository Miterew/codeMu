"use strict"

// ⊗jsPmIMFi

// #1
// Дан массив с числами. Оставьте в нем только положительные числа.

let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let plusArr = arr.filter(elem => elem > 0);
console.log(plusArr);

// #2
// Дан массив с числами. Оставьте в нем только отрицательные числа.


let minusArr = arr.filter(elem => elem < 0);
console.log(minusArr);

// #3

// Дан массив с числами. 
// Оставьте в нем только числа, которые больше нуля, но меньше 10.

let arr2 = [-20, 5, 1, -5, -1, 1, 30, 4, -1];

let filterMoreZero = arr2.filter(elem => elem > 0 && elem < 10);
console.log(filterMoreZero);

// #4
// Дан массив со строками. 
// Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arrStr = ['Привет', 'мой', 'дорогой', 'друг'];

let arrStrFilter = arrStr.filter(elem => elem.length > 5)
console.log(arrStrFilter);


// #5
// Дан массив с числами. Оставьте в нем только те числа,
//  произведение которых на их порядковый номер меньше 30.

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let arrFilter5 = arr5.filter(function (elem, index) {
    return elem * index < 30;
})
console.log(arrFilter5);


// #6
// Дан массив, в нем могут быть обычные элементы и 
// подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. 
// Оставьте в нем только обычные элементы.

let arr6 = [1, 2, [3, 4], 5, [6, 7]];

let arrFilter6 = arr6.filter( elem => {
    return typeof elem !== 'object';
})

console.log(arrFilter6);
