"use strict"
// ⊗jsPmFTAFOA


// #1
// Сделайте объект с тремя функциями, каждая из которых будет 
// принимать параметром массив с числами. Сделайте так, чтобы первая 
// функция возвращала сумму элементов массива, вторая
//  функция - сумму квадратов, а третья - сумму кубов.


let obj = {
    getSumArr: function(arr) {
        let sum = 0;

        for(let num of arr) {
            sum += num;
        }

        return sum;
    },
    getSumArrSquare: function(arr) {
        let sum = 0;

        for(let num of arr) {
            sum += num * num;
        }

        return sum;
    },
    getSumArrCube: function(arr) {
        let sum = 0;

        for(let num of arr) {
            sum += num * num * num;
        }

        return sum;
    },
}

let massiv = [2, 4];
console.log(obj.getSumArr(massiv));
console.log(obj.getSumArrSquare(massiv));
console.log(obj.getSumArrCube(massiv));
