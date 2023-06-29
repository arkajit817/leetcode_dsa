// for (var i = 0; i < 3; i++) {
//     setTimeout(function (i_local) {
//         return function () { console.log(i_local); }
//     }(i), 1000);
// }
// for (var i = 0; i < 3; i++) {
//     setTimeout(function (ilocal) {
//         return function (){
//             console.log(ilocal);
//         }
//   }(i),1000)
// }

// for(var i=0;i <3;i++){
//     var log = function(ilocal){
//         return function(){
//         console.log(ilocal);
//         }
//     }(i);
//     setTimeout(log,100);
    
// }

// var foo ;
// function foo(){

// }
// console.log(foo)


 function b(){
    console.log("3")
    // return b;
    return new Promise((resolve,reject)=>{
        resolve("6")
    })
}

console.log("1");
b();
console.log("2")