let arr = [1,2,3];

let arr2 = new Array(3);

console.log(arr, arr2);
console.log(arr[3]);


arr.length

arr.push(4)   // добавляет в конец
arr = arr.concat([6,5]);  // сложение
arr.sort();  // сорт оригинал
arr2 = arr.slice(2,5);  // отрезает часть но не модифицирует оригинал
let r = arr.includes(9); // проверка на наличие 

// пробегаемся по элементам (смотри в консоли)
arr.forEach(function(value, index, _arr) {
    console.log('value:', value, index, _arr)
})
 

// создает новый массив из имеющегося НЕ модифицирует имеющийся
let arr3 = arr.map(function(value){
    return value*2;    
})
console.log('arr3:', arr3)

console.log(arr,r); 

let arr4 =  arr.filter(function(value){
    return value%2 !== 0;
})
console.log('arr4:', arr4)



