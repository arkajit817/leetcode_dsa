let array = [2, 3, 3, 2, 5];
for(let i=0;i < array.length;i++){
    array[i] = array[i] -1;
}
let n = array.length;
for(let i=0;i < n;i++){
    array[array[i]%n] = array[array[i]%n] +n;
    console.log(array);
}

for(let i=0;i< n;i++){
    // console.log(i+1,">>>",Math.floor(array[i]/n));
}