// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// outer()();

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// let close = outer();
// close();

// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }

// let close = outer();
// close();

// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     let a = 10;
//     return inner;
// }

// let close = outer();
// close();

// function outest(){
//     var c = 20;
//     function outer(b){

//         function inner(){
//             console.log(a,b, c);
//         }
//         var a = 10;
//         return inner;
//     }
//     return outer;
// }

// let close = outest()("helloworld");
// close(); 



//Data hiding & constructor function

function Counter(){
    var count = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter(); //as it is constructor function we need to use new 
counter1.incrementCounter(); 
counter1.incrementCounter();
counter1.decrementCounter();

//1
//2
//1


function a(){
    var a = 0,z = 10; // z is garbage collected in V8 engine as it is not being used
    return function b(){
        console.log(a);
    }
}


var y = a();
y();