let name = {
    "firstname": "arkajit",
    "lastname": "choudhury"
};

let  printname = function(hometown,state,country){
    console.log(this.firstname + this.lastname + hometown, state,country);
}

let printmyname = printname.bind(name,["agartala"]);
// printmyname();

// Function.prototype.mybind = function(...args){
//     let obj = this;
//     let params = args.slice(1);
//     return function(...args2){
//         obj.apply(args[0],[...params,...args2]);
//     }
// }





Function.prototype.mybind = function (...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }
}




let printmyname1 = printname.mybind(name,"agartala","tripura");
printmyname1("india")



