function codeHoist() {
    a = 10;
    var b = 10;
}

codeHoist();
console.log(a);  // 10 //as it was undeclared so the value got assigned once it was executed
console.log(b); //ReferenceError: b is not defined


// Note: There’s a difference between ReferenceError and undefined errors. 
// An undefined error occurs when we have a variable that is either
//  not defined or explicitly defined as type undefined. 
//  ReferenceError is thrown when trying to access a previously undeclared variable. 



console.log(name); // undefined
var name = 'Mukul Latiyan';

// Function scoped variable

// Function scoped
function fun() {
    console.log(name);
    var name = 'Mukul Latiyan';
}
fun(); // Undefined


//let example(global)
console.log(name);
let name = 'Mukul Latiyan'; // ReferenceError: name is not defined

//as in let it is block scope not function scope so it comes Reference error


fun(); // Calling before declaration

function fun() { // Declaring
    console.log("Function is hoisted");
}

//op : Function is hoisted


fun() // Calling the expression

let fun = () => { // Declaring
    var name = 'Mukul Latiyan';
    console.log(name);
}

//Refernce error : fun is not defined


fun() // Calling the expression
  
var fun = () =>{ // Declaring
    var name = 'Mukul Latiyan';
    console.log(name);
}

//uncaught typeerror : fun is not a function