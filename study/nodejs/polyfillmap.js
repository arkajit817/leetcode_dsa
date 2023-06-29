let arr = [1, 2, 3];

function myfunc(a) {
    return a * 10;
}
function myfilterlogic(a) {
    return a > 2;
}

Array.prototype.mymap = function (callbackfn) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callbackfn(this[i]));
    }
    return res;
}
// console.log(arr.map(myfunc));
// console.log(arr.mymap(myfunc));

Array.prototype.myfilter = function (callbackfn) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        // res.push(callbackfn(this[i]));
        if (callbackfn(this[i])) {
            res.push(this[i]);
        }
    }
    return res;
}

// console.log(arr.filter(myfilterlogic))

let sumreduce = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sumreduce);

Array.prototype.myreduce = function (callbackFn, startparam) {
    let res = startparam;
    for (let i = 0; i < this.length; i++) {
        res = callbackFn(res, this[i]);
    }
    return res;
}

console.log(arr.myreduce((acc, curr) => {

    return acc + curr;
}, 0))