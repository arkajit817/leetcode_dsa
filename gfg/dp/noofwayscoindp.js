let n = 3 ; let v = 4;
let coins = [1,2,3];

function count(coins,n,v){
    let dp = Array(n+1).fill(Array(v+1).fill(0));
    
    for(let i=0;i <= v;i++){
        dp[0][i] = 0;
    }
    for(let i=0;i < n;i++){
        dp[i][0] = 1;
    }
    console.log(dp,"dp");
    for(let i=1;i <= n;i++){
        for(let j=1;j <=v;j++){
            if(j>= coins[i-1]){
                dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][v];
}

console.log(count(coins,n,v));


// Accolite Amazon Microsoft Morgan Stanley OYO Rooms Paytm Samsung Snapdeal