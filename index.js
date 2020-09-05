function get10(a,b) {
    return 10+a+b;
}
get10(6,3);

function even(a) {
    // return a%2 === 0 ? true : false;
    return a%2 === 0
}

// console.log(even(10));
// console.log(even(11));



//////////////////



function obj(){
    return {name:'John'}
}

let o = obj();

o.test=1;
o['test2'] = 2; // альтернативный ситаксис
// console.log(o);
// console.log(obj());





//////////////////


function dumb(){
    // console.log('dumb')
    // return
}

let d = dumb();


let testUn;
// console.log(d);
// console.log(testUn);




//////////////////



// function getF() {
//     return function nested(){
//         console.log('fuck')
//     } 
// }
// let f = getF();
// console.log(f);
// f();



//////////////////

function getF2(){
    return function nested(){
        console.log('fuck!!!')
    } 
}
let f2=getF2(); // undefined

// f2(); error
// if (f2) f2()

////////////////////



function getF() {
    return function nested(){
        return 'fuck';
    } 
}
console.log( getF()() );  //fuck



