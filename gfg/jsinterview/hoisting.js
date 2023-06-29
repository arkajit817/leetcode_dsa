
getname();
// console.log(x);

let x= 7;
function getname(){
    console.log("jj");
}

//it works for var as var is function scope & let is block scope

// const o = {a : 1};
// o[a] = 2;
// console.log(o);

this.a  = 100;

let arr = ()=>{
    this.a = 150;
}
// arr();
console.log(this.a);