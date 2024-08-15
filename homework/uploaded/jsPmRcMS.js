"use strict"

// ⊗jsPmRcMS

// №1
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.

// function getPrimitiveFromObj(obj) {
//     for(let elem in obj) {
//         if(typeof obj[elem] == 'object') {
//             getPrimitiveFromObj(obj[elem]);
//         } else {
//             console.log(obj[elem]);
//         }
//     }
// }

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// getPrimitiveFromObj(obj);


// #2 | ⊗jsPmRcMS || Не оптимально, прям вижу но не знаю инструментов других
function getPrimitiveFromArr(arr) {
    for(let elem of arr) {
        if(typeof elem == 'object') {
            getPrimitiveFromArr(elem);
        } else {
            newArr.push(elem);
        }
    }

    return newArr;
}

let newArr = [];
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
console.log(getPrimitiveFromArr(arr));