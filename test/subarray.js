
function subarray(array) {
    // console.log("inside")
    let i = 0;
    let j = 1;
    let res = -Infinity;
    let curr_sum = 0;
    // let max_sum = 0;
    while (i < array.length && j < array.length) {
        curr_sum += array[j];
        if (curr_sum > res) {
            res = curr_sum;
        }  
        if(curr_sum < res) {
            curr_sum -= array[i];
            i++;
        }
        j++;
        // res = Math.max(res, curr_sum);
        
    }
    console.log(res);
    return res;
}

// let arr = [-2,1,-3,4,-1,2,1,-5,4];
let arr = [4,-1,-2,1];

subarray(arr);