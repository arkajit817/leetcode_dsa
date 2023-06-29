a();
// b();


//function statment
function a(){
    console.log("a");
}

//function expression
var b = function b(){
    console.log("b");
}

// The difference is hoisting

//first class function
//when a function is passed as argument to another function

setTimeout(function(){
    console.log("ll")
},1000);