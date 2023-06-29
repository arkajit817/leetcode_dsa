// Problem Description
// Given an array of integers, every element appears thrice except for one, which occurs once.

// Find that element that does not appear thrice.

  function singleNumber(array){
    let ans = 0;
    for(let i=0; i < 32;i ++){
        let count =0;
        for(let j=0; j < array.length;j++){
            if(array[j] & (1 << i)){
                count++;
            }
        }
        if(count%3 !=0){
            ans = ans | (1 << i);
        }
    }
    return ans;
}


//Amazon
// Microsoft
// Ola Cabs
// Qualcomm