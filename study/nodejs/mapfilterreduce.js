let array = [1,2,3];

function mult(val){
    return val*10;
}

console.log(array.map(mult));

Array.prototype.mymap = function (callbackfn){
    let res = []
    for(let i =0; i < this.length;i++){
        res.push(callbackfn(this[i],i,this))
    }
    return res;
}

console.log(array.map(mult));