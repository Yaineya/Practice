// cd папка - переход в папку где лежит файл
// ... sandbox % node closure.js  - пишем node и название файла

let a = 5;
// console.log(a); 

let users = ['Alice', 'Dan', 'Jessica'];
let query = 'J';
query = 'D';
users.push('John')  
// let foundUsers = users.filter(user => user.startsWith(query));

let foundUsers = users.filter(function(user) {   //функция будет применяться к каждому элементу массива
    return user.startsWith(query);               // тру или фолс  Предикат
})

console.log(users, foundUsers);  


//////////////////////////////////////////////

// let number = 33;
function sum_numbers(){
    let number = 33;
    let number_2 = 44;

    let sum = number + number_2;
    console.log(sum);

    return sum;
};

// let num = sum_numbers();       
// sum_numbers();       
// console.log(number_2);   // из за области видимости не выводится в консоль
// console.log(number);

///////////////////////////////////////////////

function liveADay(){
    let food = 'cheese';
    function eat() {
        console.log(food + ' is good');
    }
    eat(); 
}
liveADay();