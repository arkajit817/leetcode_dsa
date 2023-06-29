{
    var a = 10;
    let b = 20;
    let c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

//o/p : 
// 10
// 20
// 30
// 10
// ReferenceError b is not defined
//a is hoisted in Global
//b & c are hoisted in Block


