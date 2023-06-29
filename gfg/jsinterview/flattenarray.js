let arr = [[1,2],[3,4]];

let v = arr.reduce((ac,cv)=>{
    return [...ac,...cv];
},[]);
console.log(v)

function flatten(array){
   return array.reduce((ac,cv)=>{
    return ac.concat(Array.isArray(cv)? flatten(cv) : cv );
})
}

console.log(flatten(arr));