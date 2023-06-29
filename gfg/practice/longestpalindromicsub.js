let str = "geeksforgeeks";
let n = str.length;
// let dp = Array(n).fill(Array(n).fill(0));
let dp = Array(n).fill().map(()=>Array(n).fill(0));

console.log(dp,"dp");
let max = 1;
for(let i=0;i <n;i++){
    dp[i][i] = 1;
    // console.log(dp,"dp1")

}
// console.log(dp,"dp");

for(let i=0;i < n-1;i++){
    if(str[i]== str[i+1]){
        dp[i][i+1] = 1;
        max = 2;
    }
}
console.log(dp,"dp");

for(let i=3;i <= n;i++){
    for(let j=0; j < n-i+1;j++){
        let k = i+j-1;
        if(str[j] == str[k] && dp[j+1][k-1==1]){
            dp[j][k] =1;
            if(i > max){
                i = max ;
                start = j;
            }
        }
    }
}
console.log(max, start);