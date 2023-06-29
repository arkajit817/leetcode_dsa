function longestSubsequence(n, a)
    {
        // code here
        let lis = Array(n).fill(1);
        let max =0;
        for(let i=1;i < n;i++){
            for(let j=0;j < i;j++){
                if(a[i] > a[j] && lis[i] < lis[j]+1){
                    lis[i] = lis[j]+1;
                    max = Math.max(max,lis[i]);
                }
        }
        }
        
        // console.log(lis);
        return max;
    }