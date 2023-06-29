let name = {
    firstname : "arkajit",
    lastname : "choudhury"
};

let printname = function(){
    console.log(this.firstname ,this.lastname);
}

let printMyName = printname.bind(name);
printMyName();

Function.prototype.mybind = function (...args){
    let obj = this;
    return function (){
        obj.call(args[0]);
    }
}

let printMyName2 = printname.mybind(name);
console.log(this);