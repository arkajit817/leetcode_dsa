var a = 100;
{
    var a = 10;
    let b = 20;
    let c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);


//o/p 
// 10
// 20
// 30
// 10

//as var is in Global scope so it shadowed 'a' & changed the value


let b = 100;
{
    var a = 10;
    let b = 20;
    let c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);

//o/p 
// 10
// 20
// 30
//100

//now we have 3 scopes 1. Global a : 10 2. Script b : 100 3. block : b : 20, c : 30

//as let is in block scope so once the block is executed it got removed from the callstack

const c = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(c);

//o/p 
// 10
// 20
// 30
//100

//for let & const shadowing works in similar way


// ILLEGAL SHADOWING

let d = 10;
{
    var d = 100;
}

//cant redeclare block scoped var d


var e = 10;
{
    let e = 100;
}

//this is fine as it doesnt cross the scope 

//block scope also follows LExical scope chain pattern

//lexical scope works similar in function & arrow functions