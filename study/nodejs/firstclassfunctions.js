// Difference between Function statement vs Fuction Expression
//major diff is hoisting
a(); // a
b(); //uncaught typeerror b is not a function
//reason is durimg hoisting b is treated as var with value not defined

function a(){
    console.log("a");
}

var b = function (){
    console.log("b");
}

