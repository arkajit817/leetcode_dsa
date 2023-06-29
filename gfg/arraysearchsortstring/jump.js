let array1 = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

function jump(array){
    // console.log(array);
    let max_reach = array[0];
    let step = array[0];
    let jump = 1;
    let n = array.length;
    
    if(n <1) return  -1;
    if(array[0] === 0) return -1;
    for(let i=1;i < n ;i++){
        max_reach = Math.max(max_reach, i+ array[i]);
        step--;

        if(step ==0){
            jump++;
            if(i >= max_reach) return -1;
            step = max_reach - i;
        }
    }
    return jump;

}


console.log(jump(array1));