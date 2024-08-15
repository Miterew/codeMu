"use strict"

// ⊗jsPmTmADA

// #1 
// let date = new Date(2018, 1, 35);
// console.log(date); // какая дата будет?

// 7 марта 2018 ++



// #2
// let date = new Date(2018, 15, 1);
// console.log(date); // какая дата будет?

// 1 апреля 2019 ++



// #3
// let date = new Date(2018, 3, 31);
// console.log(date); // какая дата будет?

// 2018 май 1-5? хз сколько в апреле дней) но плюс эти дни к маю) ++



// #4
// let date = new Date(2018, 1, 31);
// console.log(date); // 3 марта 2018 ++


// #5
// let date = new Date(2018, 12, 33);
// console.log(date); // 2019 0 2 -- подливили на 12))


// #6
// let date = new Date(2018, 33, 33);
// console.log(date); // 2020 ноя 2



// // #7
// let date = new Date(2018, 5, 0);
// console.log(date); // 2018 мая 31 ++



// // #8
// let date = new Date(2018, 0, 0);
// console.log(date); // 2017 декабрь 31 ++


// // #9
// let date = new Date(2018, -12, -33);
// console.log(date); // решил неправильно, сложновато)



// // #10
// let date = new Date(2018, 0, 1, 23, 0, 60);
// console.log(date); // 2018 январь 1, 23:01 ++


// // #11
// let date = new Date(2018, 0, 1, 23, 60, 0);
// console.log(date); // 2018 янв 2 ++


// #12
let date = new Date(2018, 0, 1, 100, 100, 100);
console.log(date);  // 40 101 100 1 января 2018
                    // 40 41 101  1 января 2018
                    // 40 сек 41 мин 5 часов, 5 января 2018 ++ 
                    // по 1 действию как ребенок считал)))))))))