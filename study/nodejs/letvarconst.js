// The scope is global when a var variable is declared outside a function. 
// This means that any variable that is declared with var outside a function block 
// is available for use in the whole window.

// var is function scoped when it is declared within a function.
//  This means that it is available and can be accessed only within that function


var tester = "hey hi";
    
function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: hello is not defined


var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"



var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"



// let is block scoped

// A block is a chunk of code bounded by {}. 
// A block lives in curly braces. Anything within curly braces is a block.


let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined



let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi


// Hoisting of let
// Just like  var, let declarations are hoisted to the top. 
// Unlike var which is initialized as undefined, the let keyword is not initialized.
//  So if you try to use a let variable before declaration, you'll get a Reference Error

// const declarations are block scoped
// Like let declarations, const declarations can only be accessed within the block they were declared.