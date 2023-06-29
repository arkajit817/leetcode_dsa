let array = [ -1, 2, 1, -4 ];
let n = array.length;
let result = array[0] +array[1] + array[n-1];
let target = 1;
array.sort();
// console.log(array);
for(let i=0;i < n-1;i++){
    let ptr1= i+1;
    let ptr2= n-1;
    while(ptr1<ptr2){
        let curr_sum = array[i] + array[ptr1]+ array[ptr2];
        if(Math.abs(curr_sum-target)< Math.abs(result- target)){
            result = curr_sum;
        }
        if(curr_sum> target) ptr2--;
        if(curr_sum< target) ptr1++;
    }
}
console.log(result);