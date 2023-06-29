
Number.prototype.mymult = function(a){
    "use strict";
    console.log(this)
    let obj = this;
    return function(b){
        return b ? mymult(a*b*this) : this*a;
    }
}
console.log((14).mymult(1)(2)(3)(4));