//unsolved
//vvi //dp 
var numTrees = function(n) {
    let arr = Array(n).fill(0);
        if(n== 1 || n ==0) return 1;
        arr[0] = arr[1] = 1;
        for(let i=2;i <= n;i++){
            arr[i] = 0;
            for(let j=0;j <i;j++ ){
                arr[i] += (arr[j]* arr[i-j-1]);
            }
        }
        return arr[n];
};

//dp
// Amazon Samsung Twitter Microsoft
//gfgnotworks //leetcode works