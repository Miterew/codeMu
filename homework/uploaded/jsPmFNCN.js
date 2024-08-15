"use strict"
// ⊗jsPmFNCN

// #1

// С помощью следующей функции возведите все элементы массива в куб:
// function cube(num) {
// 	return num ** 3;
// }


function cube(num) {
	return num ** 3;
}

function each(arr, callback) {
    let newArr = [];

    for(let elem of arr) {
        newArr.push( callback(elem) )
    }

    return newArr;
}


console.log(
    each([1, 2, 3, 4, 5], cube)
);