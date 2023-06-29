class Solution 
{
    //Function to find the largest number after k swaps.
    findMaximumNum(nums, k)
    {
        //your code here
        let max =nums ;
    let n = nums.length;
    // console.log("kk",n);
    const backtrack = (nums,k)=>{
        if(k ==0) return ;
        for(let i=0;i < n-1;i++){
            for(let j=i+1;j < n;j++){
                // console.log(nums[i],nums[j],"kjjbj")
                if(nums[i] < nums[j]){
                    // console.log(nums[i],nums[j],"lll");
                    // [nums[i],nums[j]] = [nums[j],nums[i]];
                    let t = nums[i];
                    nums[i] = nums[j];
                    nums[j] = t;
                    
                    if(nums.join("")> max){
                        max = nums.join("");
                    }
                    backtrack(nums,k-1);
                    // [nums[i],nums[j]] = [nums[j],nums[i]];
                    let c = nums[i];
                    nums[i] = nums[j];
                    nums[j] = c;
                }
            }
        }
    };
    backtrack(nums.split(""),k);

    return max;
    }
}

// Amazon MakeMyTrip Walmart Microsoft Google

//time complexity (o(n^2)^k)