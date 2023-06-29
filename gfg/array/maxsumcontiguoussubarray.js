function findSubarray(nums,n){ 
    //code here
    let currsum = 0;
    let maxsofar = Number.MIN_VALUE;
    let start =0; let end =0;
    let s = 0;
    for(let i=0;i < n;i++){
        currsum += nums[i];
        if(currsum > maxsofar){
            maxsofar = currsum;
            start = s;
            end = i;
        }
        if(currsum <0){
            currsum = 0;
            s = i+1;
        }
    }
    let res = [];
    for(let i=start;i <= end;i++){
        res.push(nums[i]);
    }
    return res;
  }