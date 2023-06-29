let array = [9,4,-2,-1,5,0,-5,-3,2];
let n = array.length;
let i= -1; 
let temp = 0;
console.log('ll')
for(let j=0;j < n;j++){
    console.log(array);
    // if(array[j] ==0);
    if(array[j]< 0){
        i++;
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    //    i++; 
    }
}

console.log(array);
let pos = i;
let neg = 0;
while(pos< n && neg < pos && array[neg]< 0){
    temp = array[neg];
    array[neg] = array[pos];
    array[pos] = temp;
    pos++;
    neg +=2;

}

// console.log(array);