let name = {
    "firstname" : "arkajit",
    "lastname" : "choudhury"
};

function printname (city){
    console.log(this.firstname + " "+ this.lastname + " " + city)
};

let printmyname = printname.bind(name);
printmyname("agartala");


Function.prototype.mybind = function (...args){
    let obj = this;
    let params = args.slice(1);
    return function (...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let myprint = printmyname.mybind(name);
myprint("agartala");