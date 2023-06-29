
let mult = function(a){
    return a*10;
}

let arr = [1,2,3];

Array.prototype.mymap = function (callbackFn){
    let res = [];
    for(let i=0; i < this.length;i++){
        res.push(callbackFn(this[i],i,this ));
    }
    return res;
}

console.log(arr.mymap(mult));


let myfunc = function (a){
    return a > 2;
} 

Array.prototype.myfilter = function (callbackFn){
    let res = [];
    for(let i=0; i < this.length;i++){
        if(callbackFn(this[i],i,this)){
            res.push(this[i]);
        }
    }
    return res;
}

console.log(arr.myfilter(myfunc));