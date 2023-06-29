'use strict';

console.log(this); //{}


function displayThis(){
    console.log(this); //undefined
}
displayThis();

// let myObj = {
//     'name': 'arka',
//     myFn : function(){
//         console.log(this);
//     }
// }

// myObj.myFn(); //{ name: 'arka', myFn: [Function: myFn] }

// let myObj2 = {
//     'name': 'arka',
//     myFn2 : function(){
//         function myFn3(){
//             console.log(this);
//         }
//         myFn3();
//     }
// }

// myObj2.myFn2(); //undefined