"use strict"
// ⊗jsPmFNAFA

// #1

// Дана следующая функция с коллбэком:
function filter(arr, callback) {
	let res = [];

	for (let elem of arr) {
		if ( callback(elem) === true ) {
			res.push(elem);
		}
	}
	
	return res;
}

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// Упростите коллбэк через стрелочную функцию.




console.log( 
    filter([-17, -2, 0, 1, 2, 3, 4, 5],  // добавил отрицательные значения для теста
        elem => elem > 0
    )
);
