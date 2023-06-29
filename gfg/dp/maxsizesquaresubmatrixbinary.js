// Maximum size square sub-matrix with all 1s
var maximalSquare = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = Array(m+1).fill().map(()=> Array(n+1).fill(0));
    
    let res = 0;
    for(let i=1;i <= m;i++){
        for(let j=1;j <= n;j++){
            if(i <0 || j <0) continue;
            if(matrix[i-1][j-1] ==1){
            dp[i][j] = 1+ Math.min(dp[i-1][j], dp[i][j-1],dp[i-1][j-1]);
            res = Math.max(res,dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return res*res;
    
};

//https://leetcode.com/problems/maximal-square/submissions/


// Amazon
// Samsung
// 