let array = [1,2,3,4,5];
let n = array.length;
let sumtotal = Math.floor((n+1)*(n+2));

for(let i=0;i < n;i++){
    sumtotal -= array[i];

} 
return sumtotal;