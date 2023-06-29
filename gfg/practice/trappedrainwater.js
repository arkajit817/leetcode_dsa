let array = [4, 2, 0, 6, 2, 3, 5];
let n = array.length;
let leftarray = [];
leftarray[0] = 0;
let leftmax = array[0];
for(let i=1; i < n;i++){
    if(array[i]>= leftmax){
        leftmax = array[i];
    }
    leftarray.push(leftmax);
}

let rightarray = [];
rightarray[0] = 0;
let rightmax = array[array.length -1];
for(let i=n-2; i >=0;i--){
    if(array[i]>= rightmax){
        rightmax = array[i];
    }
    rightarray.unshift(rightmax);
}

console.log(leftarray,"jh");
console.log(rightarray,"jh")

let res =0;
for(let i=1;i < n-1;i++ ){
    res += Math.min(leftarray[i],rightarray[i])- array[i];
}
console.log(res,'res')