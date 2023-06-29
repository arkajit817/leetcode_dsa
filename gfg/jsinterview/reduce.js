let users = [
    {firstname : "arka", age : 28},
    {firstname : "jit", age : 28},
    {firstname : "ii",age : 20}
]

let red = users.reduce((ac,cv)=>{
    if(ac[cv.age]){
        ac[cv.age]++;
    }else {
        ac[cv.age] = 1;
    }
    return ac;
},{})

console.log(red);