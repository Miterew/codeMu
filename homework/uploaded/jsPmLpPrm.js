"use strict"
// ⊗jsPmLpPrm


// №1

for (let i = 1; i < 100; i++){
	console.log(i);
}



// №2

for (let i = 100; i > 0; i--){
	console.log(i);
}



// №3

for (let i = 1; i < 100; i++){
	if ( i % 2 === 0){
		console.log(i);
	}
};



// №4

let arr = [];

for (let i = 0; i < 10; i++){
	arr.push('x')
}
console.log(arr)



// №5

let arr = [];

for (let i = 1; i <= 10; i++){
	arr.push(i)
}
console.log(arr);



// №6

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < arr.length; i++){
	if (arr[i] > 0 && arr[i] < 10){
		console.log(arr[i])
	}
};



// №7

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let flagOnNumber = false;

for (let i = 0; i < arr.length; i++){
	if (arr[i] === 5){
		flagOnNumber = true;
		break;
	}
};

flagOnNumber ? 
	console.log('Число 5 обнаружено в массиве.'):
	console.log('Число 5 НЕ обнаружено в массиве.');



// №8

let arr = [5, 3, 2];
let sum = 0;

for (let i = 0; i < arr.length; i++ ){
	sum += arr[i];
};
console.log(sum);



// №9

let arr = [5, 3, 2];
let sum = 0;

for (let i = 0; i < arr.length; i++){
	let square = arr[i] ** 2;
	sum += square;
}

console.log(sum);



// №10

let arr = [5, 3, 1];
let mat = 0;

for (let num of arr){
	mat += num;
};

console.log(mat / arr.length);



// №11

let number = 5;
let sum = 1;

for (let i = 1; i <= number; i++){
	sum *= i;
}
console.log(sum);



// №12

let arr = [];

for (let i = 10; i > 0; i--){
	arr.push(i);
};
console.log(arr);



// №13

let arr = [-2, -3, -4, 2, 7, 1];
let sum = 0;

for (let num of arr){
	if (num > 0){
		sum += num;
	}
};

console.log(sum);


// №14

let arr = [10, 20, 30, 50, 235, 3000];

for (let num of arr){
	let strNum = String(num);
	if (strNum[0] === '1' || strNum[0] === '2' || strNum[0] === '5'){
		console.log(num);
	};
};


// №15

let arr = [10, 20, 30, 50, 235, 3000];

for( let i = arr.length - 1 ; i >= 0; i--){
	console.log(arr[i]);
};



// №16

let arr = [13, 1, 20, 3, 50, 235, 3000];

for (let i = 0; i < arr.length; i++){
	if (arr[i] === i){
		console.log(arr[i])
	};
};


// №17

let arr = [2, 3, 4];

for (let num of arr){
	document.write( num + '<br>' );
};



// №18

let arr = [2, 3, 4];

for (let num of arr){
	document.write('<p>' + num + '</p>')
}



// №19

const weekDays = ['Пн', 'вт', 'ср', 'чт', 'пт', 'cб', 'вс'];

for (let day of weekDays){
	if (day == 'cб' || day == 'вс'){
		document.write('<b>' + day + ' </b>');
	} else {
		document.write(day + ' ');
	};

};



// №20

const weekDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let dayNow = 'суббота';

for (let day of weekDays){
    if (day === dayNow){
        document.write('<i>' + day + '</i> ');
        continue;
    };

    document.write(day + ' ');
}



// №21

let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
  };
  
  for (let salary in obj){
      let value = obj[salary] * 1.1;
      obj[salary] = +value.toFixed();
  };
  
  console.log( obj );



//   №22

let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
  };
  
  for (let salary in obj){
      if ( obj[salary] <= 400){
        let value = obj[salary] * 1.1;
        obj[salary] = +value.toFixed(2);
      } 
  };
  
  console.log( obj );



// №23

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let obj = {};
let i = 0;

for (let key of arr1){
    obj[key] = arr2[i];
    i++;
};
console.log(obj);

// №24

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKey = 0; 
let sumValue = 0;

for ( let key in obj ){
    sumKey += +key;
    sumValue += +obj[key];
};

console.log( sumKey / sumValue );



// №25

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 

let arr1 = [];
let arr2 = [];

for ( let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
};

console.log(arr1);
console.log(arr2);



// №26

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let arr = [];

for (let num in obj){
    let numberToString = String( obj[num] );

    if (numberToString[0] === '1' || numberToString[0] === '2'){
        arr.push(obj[num]);
    }
};

console.log(arr);



// №27
let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = {};
let i = 1;

for ( let letter of arr ){
    obj[i] = letter;
    i++;
};
console.log(obj);



// №28
// Сомнения в оптимальности этой задачи. 
// Тут как будто просится цикл внутри цикла, 
// но работает и так. Ожидается другое решение?

let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = {};
let i = 1;

for ( let letOfArr of arr){
    obj[letOfArr] = i;
    i++
};

console.log(obj);
