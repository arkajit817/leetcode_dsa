let array = [-1, 40, -14, 7, 6, 5, -4, -1];
let n = array.length;
let curr_max = array[0];
let max_sofar = array[0];
let sum =0;
let curr_min = array[0];
let min_sofar = array[0];
let res = 0;
for(let i=0; i < n;i++){
    sum += array[i];
}


for(let i=0;i < n;i++){
    curr_max = Math.max(array[i] , curr_max+ array[i]);
    max_sofar = Math.max(curr_max,max_sofar); 
    curr_min = Math.min(array[i],curr_min+array[i]);
    min_sofar = Math.min(curr_min,min_sofar);
}
console.log(max_sofar);
if(min_sofar== sum ){
    res = max_sofar;
}
else {
    res = Math.max(max_sofar,sum - min_sofar);
}
console.log(res);