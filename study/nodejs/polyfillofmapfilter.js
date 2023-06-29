function mult(a) {
    return a * 10;
}

function filtfunc (a){
    if(a >2) return a;
}
let arr = [1, 2, 3];

console.log(arr.map(mult));

Array.prototype.mymap = function (callbackfn){
    let res = [];
    for(let i=0; i < this.length;i++){
        res.push(callbackfn(this[i]));
    }
    return res;
}
console.log(arr.mymap(mult));

console.log(arr.filter(filtfunc));

Array.prototype.myfilt = function (callbackfn){
    let res = [];
    for(let i=0; i < this.length;i++){
        if(callbackfn(this[i])){
            res.push(this[i]);
        }
    }
    return res;
}
console.log(arr.myfilt(filtfunc));

let sumreduce = arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(sumreduce);

Array.prototype.myreduce = function (callbackfn, startparam){
    let res = startparam;
    for(let i=0; i < this.length;i++){
       res = callbackfn(res,this[i]);
    }
    return res;
}

let mysumreduce = arr.myreduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(mysumreduce);

