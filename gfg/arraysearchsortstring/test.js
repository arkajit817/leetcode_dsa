let array = [1.2,3,4,6,10,9];
let k = 10;

array.sort();
let sum = 0;
let l,r=0;
while(l < r){
    sum += array[r];
    if(sum ==k) {
        console.log(l,r);
    }
    else if(sum <k){
        r++;
    } else {
        l--;
    }
}

