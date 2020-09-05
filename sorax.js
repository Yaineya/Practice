//  //  #10 - Условные инструкции

// console.log("hi");
// if (true) console.log("it`s true");
if (false) console.log("it`s true");
// if(1) console.log("it`s true");
// if(0) console.log("it`s true");

let n = 6;
// если используем конструкцию с if, то правильно будет использовать блок инструкция ( фигурные скобки {}  )
if (n > 3) {
    n = n * 5;
    // console.log(n);
};


if (n < 3) {
    n = n * 5;
    console.log(n);
} else {
    // console.log("n не меньше 3");
}


let name = "John", city;
switch (name) {
    case "Daria": city = "Murmansk"; break;
    case "Vasia": city = "Bryansk"; break;
    case "John": city = "SPB"; break;
    case "Lena": city = "Krimea";
    default: city = "Moskow";
}
// console.log(city);

let car = "Buick", year;
switch (car) {
    case "Mazda": "1975";
    case "Opel": "1999";
    case "Audi": "2017";
    case "BMW": "1993";
    default: year = "2020";
}
// console.log(car,year);

let your_car = "mercedes";

if(your_car==="bmw"){
    console.log(your_car + " тачка"+" fire")
}else if(your_car==="audi"){
    console.log(your_car +" rs6 хороший выбор" )
}else if(your_car==="opel"){
    console.log(your_car +" старое ведро" )
}else{
    // console.log(your_car+" херня")
}


//  //  #11 - Условный оператор

// тернарный оператор имеет 3 операнда

var my_year = 1987;
var attempt_my_year = my_year > 1985 
    ? "нет, я родился раньше"
    : my_year < 1985 
        ? "нет, я родился позже"
        : "угадал, я родился в " + my_year;
// console.log(attempt_my_year);       

// выражение выше можно записать как
// var my_year = 1985;
// var attempt_my_year = my_year > 1985
// if(my_year>1985){
//     attempt_my_year="нет, я родился раньше"
// }else if(my_year<1985) {
//     attempt_my_year="нет, я родился позже"
// }else{
//     attempt_my_year="угадал, я родился в " + my_year
// }
// console.log(attempt_my_year);


// //  #12 - Циклы

// 4 вида циклов  for(инициализация, условие, инкремент){тело цикла} - количество итераций
let i;
for(i=0; i<10; i = i + 2){
    // console.log("итерация номер " + i)
}
console.log("/////// ")

// while(выражение) {инструкция}
let j=5;
while(j--){
    // console.log(j)
}
console.log("/////// ")

// do инструкция ; while (выражение)
let k=3
// do console.log(k--); while (k>=1)

let d=10;
// do console.log(d=d-2) ;while(d>0) //// если k>=0 то цикл бесконечно выводит 8 ????? почему??


//  //  #13 - Функции

// function имяФункции (входящие аргументы){
//    тело функции, 
//    инструкции
//    return 
//   }
//   имяФункции(входящие аргументы)   - таим образом вызываем функцию

function concat (name) {
    return (name + " остался без работы");
}

// console.log( concat("Alexey").toUpperCase());


//анонимная функция
let  concat_2 = function(name) {    
    return (name + " остался БЕЗ работы");
}
// console.log( concat_2("Alexey").toLowerCase());

// // #14 - Цепочки областей видимости

//  глобальные переменыые- переменные объявленные вне функций
//  локальные переменыые- переменные объявленные внутри функций
//  локальная имеет больший приоритет чем глобальная

let num = 5;
let sum = function () {
    let num = 10;
    return num * 4;
    let str = function () {
        num = 66;
        return num * 7;
    }
}
// console.log( sum());
// console.log( str());
// console.log( str());   функция отдельно не вызывается
// console.log(num);


// // #15 - Замыкания

// let guitar = "bass";
let flat = function(){
    let guitar = "bass";
    return function(){
        let guitar = "ritm";
        return guitar;
    } 
}

// console.log(flat());

let counter = function(){
    let count = 5;
    return function(){
        return count+=3;
    }
}()
console.log(counter());
console.log(counter());

console.log("///////// ////////");


// let drink = function(){
//     let bottle;
//     return function(){
//         return bottle;
//         for(bottle=3; bottle<10; bottle+=2)
//     }
// }

// // // console.log(drink())


let bottle;
for(bottle=6; bottle<10; bottle+=2)
console.log(bottle);

console.log("///////// ////////");

// // #16 - Обработка исключений 

//   try {...} catch {...}
//   try {...} finally {...}
//   try {...} catch {...} finally {...}

let number =  100;
console.log(number);

function f1(){
    console.log(number *3 +", остоси у тракториста")
}
function f2(){
    console.log(number + " 666 ")
}
function f3(){
    console.log("finally выполняется в любом случае")
}
throw f1;
try{                   // ПОПЫТКА.если блок try не может выполниться, то выполняется блок catch
    f1() 
}
catch(err){            // ОТЛОВ.блок catch не будет выполняться, если блок try выполнился
    f2();
    // console.log(err);
}
finally {               // ВЫПОЛНЕНИЕ.выполняется всегда, в независимости от того, было исключение или нет.
    f3();
}


