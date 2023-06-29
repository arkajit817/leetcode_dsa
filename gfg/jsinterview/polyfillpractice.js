let name = {
    firstname : "arka",
    lastname : "choudhury"
};

let printMyName = function (city,state){
    console.log(this.firstname + this.lastname, city,state);
}

let printarkajit = printMyName.bind(name, "agartala", "tripura");
printarkajit();

Function.prototype.mybind = function(...args){
    console.log(args);
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...args2,...params]);
    }
}

let callmybind = printMyName.mybind(name, "agartala");
// callmybind();
callmybind( "tripura");


// Function.prototype.mybind = function(...args){
//     let obj = this;
//     let params = args.slice(1);
//     return function(...args2){
//         obj.apply(args[0], [...params,...args2]);
//     }
// }


// var array = [0,1,2];

// array[4] = 4;

// console.log(array[3]);

// let tempObj = {

//     _num: 22,
  
//     get num() {
  
//       return this._num;
//     }
  
//   }

//   console.log(tempObj.num)

Function.prototype.mybind= function (...args){
    let obj = this;
    let params = args.slice(1);
    return function (...args2){
        obj.apply(args[0],[...params,...args2])
    }

}

let p = printMyName.mybind(name,"agartala")