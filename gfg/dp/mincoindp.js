let coins = [1, 2, 5];
let n = 3;
let v = 6;


function mincoin(coins,n,v){
    let dp = Array(n+1).fill(Array(v+1).fill(0));
    console.log(dp,"dp")
    for(let i=0; i <= n;i++){
        for(let j=0;j <= v;j++){
            if(j==0) {
                dp[i][j] = 0;
            } else if(i==0){
                dp[i][j] = Number.MAX_VALUE;
            } else if(coins[i-1]> j){
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = Math.min(dp[i-1][j], 1+ dp[i][j-coins[i-1]]);
            }
        }
    }
    console.log(dp,"dpooo")
    return dp[n][v];
}

console.log(mincoin(coins,n,v));

// Accolite Amazon Morgan Stanley Oracle Paytm Samsung Snapdeal Synopsys Visa Microsoft Google