var lengthOfLIS = function(nums) {
    let lis = [nums[0]];
    const binarysearch= (val)=>{
        let l = 0;
        let r = lis.length-1;
        while(l < r){
            let m = l +Math.floor((r-l)/2);
            if(lis[m]<val){
                l = m+1;
            } else {
                r = m;
            }
        }
        return l;
    }
    
    for(let i=1; i < nums.length;i++){
        if(lis[lis.length-1]< nums[i]){
            lis.push(nums[i]);
        }   else {
            let index = binarysearch(nums[i]);
            lis[index] = nums[i];
        }
    }
    return lis.length;
};