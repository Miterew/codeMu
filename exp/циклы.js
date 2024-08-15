"use strict";

// JavaScript для детей Ник Морган
// Циклы for, while - страница 108
// Задание 3 - h4ck3r sp34k


////////// ПЕРВЫЙ СПОСОБ
// const input = 'javascript is awesome';
// let output = '';

// for ( let i = 0; i < input.length; i++) {

//     if (input[i] === 'a') { 
//         output += '4';
//     }  else if (input[i] === 'i') { 
//         output += 'i';
//     } else if (input[i] === 'o') { 
//         output += '0';
//     } else { 
//         output += input[i] 
//     }
// }

// console.log (output);
////////// <> ПЕРВЫЙ СПОСОБ


////////// ВТОРОЙ СПОСОБ
// const input = 'javascript is awesome';
// let output = '';

// for ( let i = 0; i < input.length; i++) {

//     switch (input[i]){
//         case 'a':
//              output += '4'
//              break
        
//         case 'i': 
//             output += '1' 
//             break
        
//         case 'o': 
//             output += '0' 
//             break
//         default:
//             output += input[i]
//     }

// }

// console.log (output);
////////// <> ВТОРОЙ СПОСОБ



////////// ТРЕТИЙ СПОСОБ

// let input = 'javascript is awesome';

// input = input.replace(/a/g, '4'); //  / показывают что именно надо менять 
// input = input.replace(/i/g, '1'); // g значит глобальность (везде меняем а не первую)

// console.log( input )

////////// <> ТРЕТИЙ СПОСОБ





// JavaScript для детей Ник Морган
// Циклы for, while - страница 108
// Задание 2 - Генератор случайных строк

// const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыбэюя';

// let randomString = '';

// while (randomString.length < 6) {
//     randomString += ( alphabet[Math.floor ( Math.random() * alphabet.length )] );
// }

// console.log( randomString );





// JavaScript для детей Ник Морган
// Циклы for, while - страница 108
// Задание 1

// const animals = ['Кот', 'Рыба', 'Лемур', 'Комодский варан'];
// let beatifulAnimals = [];

// for (let i = 0; i < animals.length; i++) {
//     beatifulAnimals.push( animals[i] + ' прекрасное животное' )
// }

// console.log( beatifulAnimals );