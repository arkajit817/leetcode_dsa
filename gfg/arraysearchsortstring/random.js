const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

let obj = {};

for(let i = 0; i < arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]] = obj[arr[i]] +1;
    } else {
        obj[arr[i]] = 1;
    }
}
console.log(obj);